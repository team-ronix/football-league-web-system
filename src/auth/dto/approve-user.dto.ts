import { IsInt, IsPositive } from 'class-validator';

export class ApproveUserDto {
  @IsInt()
  @IsPositive()
  userId: number;
}
