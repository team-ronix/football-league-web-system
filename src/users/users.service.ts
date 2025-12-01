import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserResponseDto, LoginResponseDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async login(userName: string, password: string): Promise<LoginResponseDto> {
    const user = await this.prisma.user.findFirst({
      where: {
        username: userName,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const userResponse = new UserResponseDto({
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    });

    return new LoginResponseDto(userResponse);
  }

  async updateProfile(userId: number, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const updateData: any = {};

    if (updateUserDto.firstName) {
      updateData.firstName = updateUserDto.firstName;
    }
    if (updateUserDto.lastName) {
      updateData.lastName = updateUserDto.lastName;
    }
    if (updateUserDto.birthDate) {
      updateData.birthDate = new Date(updateUserDto.birthDate);
    }
    if (updateUserDto.gender) {
      updateData.gender = updateUserDto.gender;
    }
    if (updateUserDto.city) {
      updateData.city = updateUserDto.city;
    }
    if (updateUserDto.address !== undefined) {
      updateData.address = updateUserDto.address;
    }
    if (updateUserDto.password) {
      updateData.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true,
        birthDate: true,
        gender: true,
        city: true,
        address: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedUser;
  }
}
``;
