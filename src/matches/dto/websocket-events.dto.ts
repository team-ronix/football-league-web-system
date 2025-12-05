export class SeatUpdateEventDto {
  matchId: number;
  seatNumber: number;
  status: number; // 1 = reserved, 0 = vacant
  userId?: number; // User who made the reservation (if reserved)
  timestamp: Date;

  constructor(matchId: number, seatNumber: number, status: number, timestamp: Date, userId?: number) {
    this.matchId = matchId;
    this.seatNumber = seatNumber;
    this.status = status;
    this.timestamp = timestamp;
    this.userId = userId;
  }
}
