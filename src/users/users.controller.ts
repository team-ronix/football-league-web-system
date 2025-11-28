import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/loginUserDto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { LoginResponseDto } from './dto';

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
}
