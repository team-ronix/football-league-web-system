import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateMatchDto, UpdateMatchDto, ReserveSeatDto, ReservationResponseDto, ReservationTicketDto } from './dto';
import { MatchesGateway } from './matches.gateway';
import { SeatUpdateEventDto } from './dto/websocket-events.dto';

@Injectable()
export class MatchesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly matchesGateway: MatchesGateway,
  ) {}

  async create(createMatchDto: CreateMatchDto) {
    const [homeTeam, awayTeam, stadium] = await Promise.all([
      this.prisma.team.findUnique({ where: { id: createMatchDto.home_team_id } }),
      this.prisma.team.findUnique({ where: { id: createMatchDto.away_team_id } }),
      this.prisma.stadium.findUnique({ where: { id: createMatchDto.stadium_id } }),
    ]);

    if (!homeTeam) {
      throw new NotFoundException(`Home team with ID ${createMatchDto.home_team_id} not found`);
    }
    if (!awayTeam) {
      throw new NotFoundException(`Away team with ID ${createMatchDto.away_team_id} not found`);
    }
    if (!stadium) {
      throw new NotFoundException(`Stadium with ID ${createMatchDto.stadium_id} not found`);
    }
    if (createMatchDto.home_team_id === createMatchDto.away_team_id) {
      throw new BadRequestException('Home team and away team cannot be the same');
    }

    return this.prisma.match.create({
      data: {
        dateTime: new Date(createMatchDto.date_time),
        homeTeamId: createMatchDto.home_team_id,
        awayTeamId: createMatchDto.away_team_id,
        stadiumId: createMatchDto.stadium_id,
        mainRefereeName: createMatchDto.main_referee_name,
        linesmen1Name: createMatchDto.linesmen1_name,
        linesmen2Name: createMatchDto.linesmen2_name,
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        stadium: true,
      },
    });
  }

  async findAll() {
    return this.prisma.match.findMany({
      include: {
        homeTeam: true,
        awayTeam: true,
        stadium: true,
      },
      orderBy: {
        dateTime: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const match = await this.prisma.match.findUnique({
      where: { id },
      include: {
        homeTeam: true,
        awayTeam: true,
        stadium: true,
      },
    });

    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }

    return match;
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    await this.findOne(id);

    if (updateMatchDto.home_team_id) {
      const homeTeam = await this.prisma.team.findUnique({ 
        where: { id: updateMatchDto.home_team_id } 
      });
      if (!homeTeam) {
        throw new NotFoundException(`Home team with ID ${updateMatchDto.home_team_id} not found`);
      }
    }
    if (updateMatchDto.away_team_id) {
      const awayTeam = await this.prisma.team.findUnique({ 
        where: { id: updateMatchDto.away_team_id } 
      });
      if (!awayTeam) {
        throw new NotFoundException(`Away team with ID ${updateMatchDto.away_team_id} not found`);
      }
    }
    if (updateMatchDto.stadium_id) {
      const stadium = await this.prisma.stadium.findUnique({ 
        where: { id: updateMatchDto.stadium_id } 
      });
      if (!stadium) {
        throw new NotFoundException(`Stadium with ID ${updateMatchDto.stadium_id} not found`);
      }
    }

    return this.prisma.match.update({
      where: { id },
      data: {
        ...(updateMatchDto.date_time && { dateTime: new Date(updateMatchDto.date_time) }),
        ...(updateMatchDto.home_team_id && { homeTeamId: updateMatchDto.home_team_id }),
        ...(updateMatchDto.away_team_id && { awayTeamId: updateMatchDto.away_team_id }),
        ...(updateMatchDto.stadium_id && { stadiumId: updateMatchDto.stadium_id }),
        ...(updateMatchDto.main_referee_name && { mainRefereeName: updateMatchDto.main_referee_name }),
        ...(updateMatchDto.linesmen1_name && { linesmen1Name: updateMatchDto.linesmen1_name }),
        ...(updateMatchDto.linesmen2_name && { linesmen2Name: updateMatchDto.linesmen2_name }),
      },
      include: {
        homeTeam: true,
        awayTeam: true,
        stadium: true,
      },
    });
  }

  async getMatchSeatsPublic(matchId: number, userId?: number) {
    const match = await this.findOne(matchId);
    
    const totalSeats = match.stadium.noOfRows * match.stadium.seatsPerRow;
    const reservedSeats = await this.prisma.matchSeat.findMany({
      where: { matchId },
      select: { 
        seatNumber: true,
        userId: true,
      },
    });

    const reservedSeatMap = new Map(
      reservedSeats.map(s => [s.seatNumber, s.userId])
    );
    const seats: Array<{ 
      seat_number: number; 
      is_reserved: boolean;
      reserved_by_current_user?: boolean;
    }> = [];

    for (let i = 1; i <= totalSeats; i++) {
      const reservedByUserId = reservedSeatMap.get(i);
      const isReserved = reservedByUserId !== undefined;
      
      seats.push({
        seat_number: i,
        is_reserved: isReserved,
        reserved_by_current_user: isReserved && userId ? reservedByUserId === userId : undefined,
      });
    }

    return {
      match_id: matchId,
      total_seats: totalSeats,
      reserved_count: reservedSeats.length,
      vacant_count: totalSeats - reservedSeats.length,
      seats,
    };
  }

  async getMatchSeatsManager(matchId: number) {
    const match = await this.findOne(matchId);
    
    const totalSeats = match.stadium.noOfRows * match.stadium.seatsPerRow;
    const reservedSeats = await this.prisma.matchSeat.findMany({
      where: { matchId },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    const reservedSeatMap = new Map(
      reservedSeats.map(s => [s.seatNumber, s])
    );
    const seats: Array<{
      seat_number: number;
      is_reserved: boolean;
      user?: { id: number; username: string; firstName: string; lastName: string; email: string };
      reserved_at?: Date;
    }> = [];

    for (let i = 1; i <= totalSeats; i++) {
      const reservation = reservedSeatMap.get(i);
      if (reservation) {
        seats.push({
          seat_number: i,
          is_reserved: true,
          user: reservation.user,
          reserved_at: reservation.createdAt,
        });
      } else {
        seats.push({
          seat_number: i,
          is_reserved: false,
        });
      }
    }

    return {
      match_id: matchId,
      total_seats: totalSeats,
      reserved_count: reservedSeats.length,
      vacant_count: totalSeats - reservedSeats.length,
      seats,
    };
  }

  async reserveSeats(matchId: number, userId: number, reserveSeatDto: ReserveSeatDto) {
    const match = await this.findOne(matchId);
    
    if (new Date(match.dateTime) <= new Date()) {
      throw new BadRequestException('Cannot reserve seats for past matches');
    }

    const totalSeats = match.stadium.noOfRows * match.stadium.seatsPerRow;

    for (const seatNumber of reserveSeatDto.seatNumbers) {
      if (seatNumber < 1 || seatNumber > totalSeats) {
        throw new BadRequestException(
          `Seat number ${seatNumber} is invalid. Valid range: 1-${totalSeats}`,
        );
      }
    }

    const tickets = await this.prisma.$transaction(async (tx) => {
      const existingReservations = await tx.matchSeat.findMany({
        where: {
          matchId,
          seatNumber: { in: reserveSeatDto.seatNumbers },
        },
      });

      if (existingReservations.length > 0) {
        const reservedSeats = existingReservations.map(r => r.seatNumber).join(', ');
        throw new BadRequestException(
          `The following seats are already reserved: ${reservedSeats}`,
        );
      }

      const ticketsList: ReservationTicketDto[] = [];

      for (const seatNumber of reserveSeatDto.seatNumbers) {
        const reservation = await tx.matchSeat.create({
          data: {
            matchId,
            userId,
            seatNumber,
          },
        });

        const ticket = new ReservationTicketDto(matchId, seatNumber, reservation.createdAt);
        ticketsList.push(ticket);
      }

      return ticketsList;
    });

    for (const ticket of tickets) {
      const event = new SeatUpdateEventDto(
        matchId,
        ticket.seatNumber,
        1,
        ticket.reservedAt,
        userId,
      );
      this.matchesGateway.broadcastSeatUpdate(event);
    }

    return new ReservationResponseDto(tickets);
  }

  async cancelReservation(matchId: number, userId: number, seatNumber: number) {
    const match = await this.findOne(matchId);

    const reservation = await this.prisma.matchSeat.findFirst({
      where: {
        matchId,
        seatNumber,
        userId,
      },
    });

    if (!reservation) {
      throw new NotFoundException(
        'Reservation not found or does not belong to you',
      );
    }

    const matchDate = new Date(match.dateTime);
    const now = new Date();
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
    const timeDifference = matchDate.getTime() - now.getTime();

    if (timeDifference < threeDaysInMs) {
      throw new BadRequestException(
        'Cannot cancel reservation less than 3 days before the match',
      );
    }

    await this.prisma.matchSeat.delete({
      where: {
        id: reservation.id,
      },
    });

    const cancelledAt = new Date();

    const event = new SeatUpdateEventDto(matchId, seatNumber, 0, cancelledAt, undefined);
    this.matchesGateway.broadcastSeatUpdate(event);

    return {
      message: 'Reservation cancelled successfully',
      matchId,
      seatNumber,
      cancelledAt,
    };
  }

  async reserveSeatsNew(matchId: number, userId: number, reservationData: any) {
    const match = await this.findOne(matchId);
    
    if (new Date(match.dateTime) <= new Date()) {
      throw new BadRequestException('Cannot reserve seats for past matches');
    }

    const totalSeats = match.stadium.noOfRows * match.stadium.seatsPerRow;
    const seatNumbers = reservationData.seat_numbers;

    for (const seatNumber of seatNumbers) {
      if (seatNumber < 1 || seatNumber > totalSeats) {
        throw new BadRequestException(
          `Seat number ${seatNumber} is invalid. Valid range: 1-${totalSeats}`,
        );
      }
    }

    if (!reservationData.card_number || !reservationData.card_pin) {
      throw new BadRequestException('Credit card number and PIN are required');
    }

    const cardNumber = reservationData.card_number.replace(/\s/g, '');
    if (cardNumber.length < 13 || cardNumber.length > 19) {
      throw new BadRequestException('Invalid card number format');
    }

    if (reservationData.card_pin.length !== 4) {
      throw new BadRequestException('PIN must be 4 digits');
    }

    const tickets = await this.prisma.$transaction(async (tx) => {
      const existingReservations = await tx.matchSeat.findMany({
        where: {
          matchId,
          seatNumber: { in: seatNumbers },
        },
      });

      if (existingReservations.length > 0) {
        const reservedSeats = existingReservations.map(r => r.seatNumber).join(', ');
        throw new BadRequestException(
          `The following seats are already reserved: ${reservedSeats}`,
        );
      }

      const ticketsList: any[] = [];

      for (const seatNumber of seatNumbers) {
        const reservation = await tx.matchSeat.create({
          data: {
            matchId,
            userId,
            seatNumber,
          },
        });

        ticketsList.push({
          ticketNumber: `${matchId}-${seatNumber}`,
          matchId,
          seatNumber,
          reservedAt: reservation.createdAt,
        });
      }

      return ticketsList;
    });

    for (const ticket of tickets) {
      const event = new SeatUpdateEventDto(
        matchId,
        ticket.seatNumber,
        1,
        ticket.reservedAt,
        userId,
      );
      this.matchesGateway.broadcastSeatUpdate(event);
    }

    return { tickets };
  }

  async cancelReservationNew(matchId: number, userId: number, seatNumber: number) {
    const match = await this.findOne(matchId);

    const reservation = await this.prisma.matchSeat.findFirst({
      where: {
        matchId,
        seatNumber,
        userId,
      },
    });

    if (!reservation) {
      throw new NotFoundException(
        'Reservation not found or does not belong to you',
      );
    }

    const matchDate = new Date(match.dateTime);
    const now = new Date();
    const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
    const timeDifference = matchDate.getTime() - now.getTime();

    if (timeDifference < threeDaysInMs) {
      throw new BadRequestException(
        'Cannot cancel reservation less than 3 days before the match',
      );
    }

    await this.prisma.matchSeat.delete({
      where: {
        id: reservation.id,
      },
    });

    const cancelledAt = new Date();

    const event = new SeatUpdateEventDto(matchId, seatNumber, 0, cancelledAt, undefined);
    this.matchesGateway.broadcastSeatUpdate(event);

    return {
      message: 'Reservation cancelled successfully',
      matchId,
      seatNumber,
      cancelledAt,
    };
  }

  async getMyReservations(userId: number) {
    const reservations = await this.prisma.matchSeat.findMany({
      where: {
        userId,
      },
      include: {
        match: {
          include: {
            homeTeam: true,
            awayTeam: true,
            stadium: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return reservations;
  }
}
