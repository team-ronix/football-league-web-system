import {
  IsArray,
  IsString,
  IsInt,
  Min,
  ArrayMinSize,
  Length,
  Matches,
} from 'class-validator';

export class ReserveSeatDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  @Min(1, { each: true })
  seatNumbers: number[];

  @IsString()
  @Length(16, 16)
  @Matches(/^\d{16}$/, { message: 'Credit card number must be 16 digits' })
  creditCardNumber: string;

  @IsString()
  @Length(4, 4)
  @Matches(/^\d{4}$/, { message: 'PIN must be 4 digits' })
  pin: string;
}

export class ReservationTicketDto {
  matchId: number;
  seatNumber: number;
  ticketNumber: string;
  reservedAt: Date;

  constructor(matchId: number, seatNumber: number, reservedAt: Date) {
    this.matchId = matchId;
    this.seatNumber = seatNumber;
    this.ticketNumber = `${matchId}-${seatNumber}`;
    this.reservedAt = reservedAt;
  }
}

export class ReservationResponseDto {
  tickets: ReservationTicketDto[];
  message: string;

  constructor(tickets: ReservationTicketDto[]) {
    this.tickets = tickets;
    this.message = 'Reservation confirmed successfully';
  }
}
