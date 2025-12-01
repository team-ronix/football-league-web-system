import { IsInt, IsPositive } from 'class-validator';

export class RemoveUserDto {
  @IsInt()
  @IsPositive()
  userId: number;
}
