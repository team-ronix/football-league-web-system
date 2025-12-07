import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ManagerGuard, FanGuard, AuthenticatedGuard, RolesGuard, Roles } from '@/auth/guards';
import { ApiResponse } from '@/common/dto/api-response.dto';
import { UserRole } from '@/generated/prisma/enums';

@Controller('example')
export class ExampleController {
  
  @Get('public')
  async publicEndpoint(): Promise<ApiResponse<string>> {
    return ApiResponse.ok('This is a public endpoint', 'Success');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('authenticated')
  async authenticatedEndpoint(@Request() req): Promise<ApiResponse<any>> {
    return ApiResponse.ok(
      { username: req.user.username, role: req.user.role },
      'This endpoint requires authentication'
    );
  }

  @UseGuards(ManagerGuard)
  @Get('manager-only')
  async managerOnlyEndpoint(@Request() req): Promise<ApiResponse<string>> {
    return ApiResponse.ok(
      `Hello Manager ${req.user.username}`,
      'This endpoint is for managers only'
    );
  }

  @UseGuards(FanGuard)
  @Get('fan-only')
  async fanOnlyEndpoint(@Request() req): Promise<ApiResponse<string>> {
    return ApiResponse.ok(
      `Hello Fan ${req.user.username}`,
      'This endpoint is for fans only'
    );
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Roles(UserRole.MANAGER, UserRole.FAN)
  @Get('multi-role')
  async multiRoleEndpoint(@Request() req): Promise<ApiResponse<string>> {
    return ApiResponse.ok(
      `Hello ${req.user.username} (${req.user.role})`,
      'This endpoint is for both managers and fans'
    );
  }
}
