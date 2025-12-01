import { IsDateString, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateMatchDto {
  @IsDateString()
  @IsOptional()
  date_time?: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsOptional()
  home_team_id?: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsOptional()
  away_team_id?: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsOptional()
  stadium_id?: number;

  @IsString()
  @IsOptional()
  main_referee_name?: string;

  @IsString()
  @IsOptional()
  linesmen1_name?: string;

  @IsString()
  @IsOptional()
  linesmen2_name?: string;
}
