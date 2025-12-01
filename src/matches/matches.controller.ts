import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatchDto, UpdateMatchDto, ReserveSeatDto } from './dto';
import { ApprovedManagerGuard } from '@/auth/guards/approved-manager.guard';
import { AuthenticatedGuard } from '@/auth/guards/authenticated.guard';
import { UserRole } from '@/generated/prisma/enums';
import { ApprovedFanGuard } from '@/auth/guards/approved-fan.guard';
import { ApiResponse } from '@/common/dto/api-response.dto';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Post()
  @UseGuards(AuthenticatedGuard, ApprovedManagerGuard)
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchesService.create(createMatchDto);
  }

  @Get()
  findAll() {
    return this.matchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.matchesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticatedGuard, ApprovedManagerGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMatchDto: UpdateMatchDto,
  ) {
    return this.matchesService.update(id, updateMatchDto);
  }

  @Get(':id/seats')
  getMatchSeats(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    // Check if user is authenticated and is an approved manager
    const user = req.user;
    const isApprovedManager = user && user.role === UserRole.MANAGER && user.approved;

    if (isApprovedManager) {
      return this.matchesService.getMatchSeatsManager(id);
    } else {
      return this.matchesService.getMatchSeatsPublic(id);
    }
  }

  @Post(':id/reserve')
  @UseGuards(AuthenticatedGuard, ApprovedFanGuard)
  async reserveSeats(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any,
    @Body() reserveSeatDto: ReserveSeatDto,
  ) {
    const result = await this.matchesService.reserveSeats(
      id,
      req.user.id,
      reserveSeatDto,
    );
    return ApiResponse.ok(result, 'Seats reserved successfully');
  }

  @Delete(':id/reservations/:seatNumber')
  @UseGuards(AuthenticatedGuard, ApprovedFanGuard)
  async cancelReservation(
    @Param('id', ParseIntPipe) id: number,
    @Param('seatNumber', ParseIntPipe) seatNumber: number,
    @Req() req: any,
  ) {
    const result = await this.matchesService.cancelReservation(
      id,
      req.user.id,
      seatNumber,
    );
    return ApiResponse.ok(result, 'Reservation cancelled successfully');
  }
}
