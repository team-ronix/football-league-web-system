import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { SeatUpdateEventDto } from './dto/websocket-events.dto';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
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

  @SubscribeMessage('subscribe-match')
  handleSubscribeToMatch(
    @MessageBody() payload: { matchId: number },
    @ConnectedSocket() client: Socket,
  ): void {
    const matchId = payload.matchId;
    const room = `match-${matchId}`;
    client.join(room);
    this.logger.log(`Client ${client.id} subscribed to ${room}`);
    client.emit('subscribed', { matchId, message: `Subscribed to match ${matchId} updates` });
  }

  @SubscribeMessage('unsubscribe-match')
  handleUnsubscribeFromMatch(
    @MessageBody() payload: { matchId: number },
    @ConnectedSocket() client: Socket,
  ): void {
    const matchId = payload.matchId;
    const room = `match-${matchId}`;
    client.leave(room);
    this.logger.log(`Client ${client.id} unsubscribed from ${room}`);
    client.emit('unsubscribed', { matchId, message: `Unsubscribed from match ${matchId} updates` });
  }

  broadcastSeatUpdate(event: SeatUpdateEventDto): void {
    const room = `match-${event.matchId}`;
    this.server.to(room).emit('seat-update', event);
    this.logger.log(
      `Broadcasting seat update: Match ${event.matchId}, Seat ${event.seatNumber}, Status ${event.status}`,
    );
  }
}
