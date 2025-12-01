import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { SeatReservedEventDto, SeatCancelledEventDto } from './dto/websocket-events.dto';

@WebSocketGateway({
  cors: {
    origin: '*', // Configure this based on your frontend URL in production
  },
  namespace: '/matches',
})
export class MatchesGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger = new Logger(MatchesGateway.name);

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // Allow clients to subscribe to specific match updates
  @SubscribeMessage('subscribe-match')
  handleSubscribeToMatch(
    @MessageBody() matchId: number,
    client: Socket,
  ): void {
    const room = `match-${matchId}`;
    client.join(room);
    this.logger.log(`Client ${client.id} subscribed to ${room}`);
    client.emit('subscribed', { matchId, message: `Subscribed to match ${matchId} updates` });
  }

  // Allow clients to unsubscribe from specific match updates
  @SubscribeMessage('unsubscribe-match')
  handleUnsubscribeFromMatch(
    @MessageBody() matchId: number,
    client: Socket,
  ): void {
    const room = `match-${matchId}`;
    client.leave(room);
    this.logger.log(`Client ${client.id} unsubscribed from ${room}`);
    client.emit('unsubscribed', { matchId, message: `Unsubscribed from match ${matchId} updates` });
  }

  // Broadcast seat reservation to all clients watching this match
  broadcastSeatReserved(event: SeatReservedEventDto): void {
    const room = `match-${event.matchId}`;
    this.server.to(room).emit('seat-reserved', event);
    this.logger.log(
      `Broadcasting seat reservation: Match ${event.matchId}, Seat ${event.seatNumber}`,
    );
  }

  // Broadcast seat cancellation to all clients watching this match
  broadcastSeatCancelled(event: SeatCancelledEventDto): void {
    const room = `match-${event.matchId}`;
    this.server.to(room).emit('seat-cancelled', event);
    this.logger.log(
      `Broadcasting seat cancellation: Match ${event.matchId}, Seat ${event.seatNumber}`,
    );
  }
}
