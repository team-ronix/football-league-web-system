import { Injectable, UnauthorizedException, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@/generated/prisma/client';
import { UserRole } from '@/generated/prisma/enums';
import { RegisterDto } from './dto';

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
};

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
    const existingUsername = await this.prisma.user.findUnique({
      where: { username: registerDto.username },
    });

    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    const existingEmail = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    if (registerDto.preferred_team_id) {
      const team = await this.prisma.team.findUnique({
        where: { id: registerDto.preferred_team_id },
      });

      if (!team) {
        throw new ConflictException('Preferred team does not exist');
      }
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

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

  // Admin authentication (hardcoded credentials)
  validateAdmin(username: string, password: string): boolean {
    return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password;
  }


  async getPendingUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        approved: false,
      },
      include: {
        preferredTeam: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }


  async approveUser(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.approved) {
      throw new ConflictException('User is already approved');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { approved: true },
      include: {
        preferredTeam: true,
      },
    });
  }

  // Unapprove a user
  async unapproveUser(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.approved) {
      throw new ConflictException('User is not approved');
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { approved: false },
      include: {
        preferredTeam: true,
      },
    });
  }

  // Remove a user
  async removeUser(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        matchSeats: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.prisma.matchSeat.deleteMany({
      where: { userId: userId },
    });

    return this.prisma.user.delete({
      where: { id: userId },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        preferredTeam: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async updateProfile(userId: number, updateData: any): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Validate preferred team if provided
    if (updateData.preferred_team_id) {
      const team = await this.prisma.team.findUnique({
        where: { id: updateData.preferred_team_id },
      });

      if (!team) {
        throw new NotFoundException('Preferred team does not exist');
      }
    }

    // Build update data object
    const data: any = {};
    
    if (updateData.first_name) data.firstName = updateData.first_name;
    if (updateData.last_name) data.lastName = updateData.last_name;
    if (updateData.date_of_birth) data.birthDate = new Date(updateData.date_of_birth);
    if (updateData.gender) data.gender = updateData.gender;
    if (updateData.city) data.city = updateData.city;
    if (updateData.address !== undefined) data.address = updateData.address;
    if (updateData.preferred_team_id !== undefined) {
      data.preferredTeamId = updateData.preferred_team_id || null;
    }

    return this.prisma.user.update({
      where: { id: userId },
      data,
      include: {
        preferredTeam: true,
      },
    });
  }
}

