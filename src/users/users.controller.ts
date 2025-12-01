import { Controller, Post, Body, Patch, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/loginUserDto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { LoginResponseDto, UpdateUserDto } from './dto';
import { AuthenticatedGuard } from '@/auth/guards/authenticated.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(
    @Body() loginUserDto: LoginUserDto,
  ): Promise<ApiResponse<LoginResponseDto>> {
    const result = await this.usersService.login(
      loginUserDto.username,
      loginUserDto.password,
    );
    return ApiResponse.ok(result, 'Login successful');
  }

  @Patch('me')
  @UseGuards(AuthenticatedGuard)
  async updateProfile(
    @Req() req: any,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatedUser = await this.usersService.updateProfile(
      req.user.id,
      updateUserDto,
    );
    return ApiResponse.ok(updatedUser, 'Profile updated successfully');
  }
}
