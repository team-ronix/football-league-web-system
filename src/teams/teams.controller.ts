import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { ApiResponse } from '@/common/dto/api-response.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async findAll() {
    const teams = await this.teamsService.findAll();
    return ApiResponse.ok(teams, 'Teams retrieved successfully');
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const team = await this.teamsService.findOne(id);
    return ApiResponse.ok(team, 'Team retrieved successfully');
  }

  @Post('seed')
  async seed() {
    const result = await this.teamsService.seed();
    return ApiResponse.ok(result, result.message);
  }
}
