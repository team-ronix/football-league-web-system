import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserResponseDto, LoginResponseDto } from './dto';

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
}
``;
