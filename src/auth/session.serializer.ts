import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from '@/generated/prisma/client';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private authService: AuthService) {
    super();
  }

  serializeUser(user: User, done: (err: Error | null, userId: number) => void): void {
    done(null, user.id);
  }

  async deserializeUser(userId: number, done: (err: Error | null, user: User | null) => void): Promise<void> {
    try {
      const user = await this.authService.findUserById(userId);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  }
}
