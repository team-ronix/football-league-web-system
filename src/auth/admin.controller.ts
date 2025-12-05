import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
  ValidationPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminGuard } from './guards/admin.guard';
import { ApiResponse } from '@/common/dto/api-response.dto';
import { AdminLoginDto, ApproveUserDto, RemoveUserDto } from './dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() adminLoginDto: AdminLoginDto,
    @Request() req,
  ): Promise<ApiResponse<any>> {
    const isValid = this.authService.validateAdmin(
      adminLoginDto.username,
      adminLoginDto.password,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid admin credentials');
    }

    // Store admin session
    req.session.admin = {
      username: adminLoginDto.username,
      loginTime: new Date(),
    };

    return ApiResponse.ok(
      {
        username: adminLoginDto.username,
        role: 'ADMIN',
      },
      'Admin login successful',
    );
  }

  @Post('logout')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async logout(@Request() req): Promise<ApiResponse<null>> {
    req.session.destroy((err) => {
      if (err) {
        console.error('Session destruction error:', err);
      }
    });
    return ApiResponse.ok(null, 'Admin logout successful');
  }

  @Get('users/pending')
  @UseGuards(AdminGuard)
  async getPendingUsers(): Promise<ApiResponse<any>> {
    const users = await this.authService.getPendingUsers();
    const sanitizedUsers = users.map(({ password, ...user }) => user);
    
    return ApiResponse.ok(
      sanitizedUsers,
      'Pending users retrieved successfully',
    );
  }

  @Get('users')
  @UseGuards(AdminGuard)
  async getAllUsers(): Promise<ApiResponse<any>> {
    const users = await this.authService.getAllUsers();
    const sanitizedUsers = users.map(({ password, ...user }) => user);
    
    return ApiResponse.ok(
      sanitizedUsers,
      'All users retrieved successfully',
    );
  }

  @Post('users/approve')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async approveUser(
    @Body(new ValidationPipe()) approveUserDto: ApproveUserDto,
  ): Promise<ApiResponse<any>> {
    const user = await this.authService.approveUser(approveUserDto.userId);
    const { password, ...userWithoutPassword } = user;
    
    return ApiResponse.ok(
      userWithoutPassword,
      'User approved successfully',
    );
  }

  @Post('users/unapprove')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async unapproveUser(
    @Body(new ValidationPipe()) approveUserDto: ApproveUserDto,
  ): Promise<ApiResponse<any>> {
    const user = await this.authService.unapproveUser(approveUserDto.userId);
    const { password, ...userWithoutPassword } = user;
    
    return ApiResponse.ok(
      userWithoutPassword,
      'User unapproved successfully',
    );
  }

  @Delete('users/:userId')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.OK)
  async removeUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<ApiResponse<any>> {
    const user = await this.authService.removeUser(userId);
    const { password, ...userWithoutPassword } = user;
    
    return ApiResponse.ok(
      userWithoutPassword,
      'User removed successfully',
    );
  }

  @Get('profile')
  @UseGuards(AdminGuard)
  async getProfile(@Request() req): Promise<ApiResponse<any>> {
    return ApiResponse.ok(
      {
        username: req.session.admin.username,
        role: 'ADMIN',
        loginTime: req.session.admin.loginTime,
      },
      'Admin profile retrieved successfully',
    );
  }
}
