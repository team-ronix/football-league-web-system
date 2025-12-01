export class SeatReservedEventDto {
  matchId: number;
  seatNumber: number;
  ticketNumber: string;
  reservedAt: Date;

  constructor(matchId: number, seatNumber: number, ticketNumber: string, reservedAt: Date) {
    this.matchId = matchId;
    this.seatNumber = seatNumber;
    this.ticketNumber = ticketNumber;
    this.reservedAt = reservedAt;
  }
}

export class SeatCancelledEventDto {
  matchId: number;
  seatNumber: number;
  cancelledAt: Date;

  constructor(matchId: number, seatNumber: number, cancelledAt: Date) {
    this.matchId = matchId;
    this.seatNumber = seatNumber;
    this.cancelledAt = cancelledAt;
  }
}
