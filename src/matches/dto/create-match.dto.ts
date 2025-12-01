import { IsDateString, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMatchDto {
  @IsDateString()
  @IsNotEmpty()
  date_time: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsNotEmpty()
  home_team_id: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsNotEmpty()
  away_team_id: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsNotEmpty()
  stadium_id: number;

  @IsString()
  @IsNotEmpty()
  main_referee_name: string;

  @IsString()
  @IsNotEmpty()
  linesmen1_name: string;

  @IsString()
  @IsNotEmpty()
  linesmen2_name: string;
}
