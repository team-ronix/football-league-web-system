import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateMatchDto, UpdateMatchDto } from './dto';

@Injectable()
export class MatchesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMatchDto: CreateMatchDto) {
    // Validate teams exist
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
    await this.findOne(id); // Check if exists

    // Validate teams and stadium if provided
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

  // For public: returns seat numbers and reservation status only
  async getMatchSeatsPublic(matchId: number) {
    const match = await this.findOne(matchId);
    
    const totalSeats = match.stadium.noOfRows * match.stadium.seatsPerRow;
    const reservedSeats = await this.prisma.matchSeat.findMany({
      where: { matchId },
      select: { seatNumber: true },
    });

    const reservedSeatNumbers = new Set(reservedSeats.map(s => s.seatNumber));
    const seats: Array<{ seat_number: number; is_reserved: boolean }> = [];

    for (let i = 1; i <= totalSeats; i++) {
      seats.push({
        seat_number: i,
        is_reserved: reservedSeatNumbers.has(i),
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

  // For managers: returns full details including user information
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
}
