import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateStadiumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  no_of_rows: number;

  @IsInt()
  @Min(1)
  @Type(() => Number)
  seats_per_row: number;
}
