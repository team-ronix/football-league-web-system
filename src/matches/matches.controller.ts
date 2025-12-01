import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { MatchesService } from './matches.service';
import { CreateMatchDto, UpdateMatchDto } from './dto';
import { ApprovedManagerGuard } from '@/auth/guards/approved-manager.guard';
import { AuthenticatedGuard } from '@/auth/guards/authenticated.guard';
import { UserRole } from '@/generated/prisma/enums';

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
}
