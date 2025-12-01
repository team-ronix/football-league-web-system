import { IsInt, Min } from 'class-validator';

export class CancelReservationDto {
  @IsInt()
  @Min(1)
  seatNumber: number;
}

export class CancelReservationResponseDto {
  message: string;
  matchId: number;
  seatNumber: number;
  cancelledAt: Date;

  constructor(matchId: number, seatNumber: number) {
    this.message = 'Reservation cancelled successfully';
    this.matchId = matchId;
    this.seatNumber = seatNumber;
    this.cancelledAt = new Date();
  }
}
