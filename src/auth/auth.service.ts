import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@/generated/prisma/client';
import { UserRole } from '@/generated/prisma/enums';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    // Check if user is approved (for fans) or is a manager
    if (user.role === UserRole.FAN && !user.approved) {
      throw new UnauthorizedException('Account not yet approved by administrator');
    }

    return user;
  }

  async findUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        preferredTeam: true,
      },
    });
  }
}
