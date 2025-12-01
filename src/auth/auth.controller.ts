import { Controller, Post, UseGuards, Request, Get, HttpCode, HttpStatus, Body, ValidationPipe } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ApiResponse } from '@/common/dto/api-response.dto';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body(new ValidationPipe()) loginDto: LoginDto, @Request() req): Promise<ApiResponse<any>> {
    const { password, ...userWithoutPassword } = req.user;
    
    return ApiResponse.ok({
      user: {
        id: userWithoutPassword.id,
        username: userWithoutPassword.username,
        email: userWithoutPassword.email,
        firstName: userWithoutPassword.firstName,
        lastName: userWithoutPassword.lastName,
        role: userWithoutPassword.role,
        approved: userWithoutPassword.approved,
      },
    }, 'Login successful');
  }

  @Post('logout')
  @UseGuards(AuthenticatedGuard)
  async logout(@Request() req): Promise<ApiResponse<null>> {
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destruction error:', err);
      }
    });
    return ApiResponse.ok(null, 'Logout successful');
  }

  @Get('profile')
  @UseGuards(AuthenticatedGuard)
  async getProfile(@Request() req): Promise<ApiResponse<any>> {
    const { password, ...userWithoutPassword } = req.user;
    return ApiResponse.ok(userWithoutPassword, 'Profile retrieved successfully');
  }
}
