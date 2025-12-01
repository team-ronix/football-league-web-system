import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@/generated/prisma/client';
import { UserRole } from '@/generated/prisma/enums';
import { RegisterDto } from './dto';

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

  async register(registerDto: RegisterDto): Promise<User> {
    // Check if username already exists
    const existingUsername = await this.prisma.user.findUnique({
      where: { username: registerDto.username },
    });

    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    // Check if email already exists
    const existingEmail = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    // If preferredTeamId is provided, validate that the team exists
    if (registerDto.preferred_team_id) {
      const team = await this.prisma.team.findUnique({
        where: { id: registerDto.preferred_team_id },
      });

      if (!team) {
        throw new ConflictException('Preferred team does not exist');
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Create the user
    const user = await this.prisma.user.create({
      data: {
        username: registerDto.username,
        password: hashedPassword,
        firstName: registerDto.first_name,
        lastName: registerDto.last_name,
        birthDate: new Date(registerDto.birth_date),
        gender: registerDto.gender,
        city: registerDto.city,
        address: registerDto.address,
        email: registerDto.email,
        role: registerDto.role,
        approved: false, // New users need admin approval by default
        preferredTeamId: registerDto.preferred_team_id || null,
      },
      include: {
        preferredTeam: true,
      },
    });

    return user;
  }
}
