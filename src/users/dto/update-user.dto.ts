import {
  IsString,
  IsOptional,
  IsDateString,
  IsEnum,
  MinLength,
} from 'class-validator';
import { Gender } from '@/generated/prisma/enums';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  lastName?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  @MinLength(1)
  city?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  password?: string;
}
