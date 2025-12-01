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
} from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto, UpdateStadiumDto } from './dto';
import { ApprovedManagerGuard } from '@/auth/guards/approved-manager.guard';
import { AuthenticatedGuard } from '@/auth/guards/authenticated.guard';

@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @Post()
  @UseGuards(AuthenticatedGuard, ApprovedManagerGuard)
  create(@Body() createStadiumDto: CreateStadiumDto) {
    return this.stadiumsService.create(createStadiumDto);
  }

  @Get()
  findAll() {
    return this.stadiumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.stadiumsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticatedGuard, ApprovedManagerGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStadiumDto: UpdateStadiumDto,
  ) {
    return this.stadiumsService.update(id, updateStadiumDto);
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard, ApprovedManagerGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.stadiumsService.remove(id);
  }
}
