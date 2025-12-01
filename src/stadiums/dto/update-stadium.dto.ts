import { IsString, IsOptional, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateStadiumDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsOptional()
  no_of_rows?: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  @IsOptional()
  seats_per_row?: number;
}
