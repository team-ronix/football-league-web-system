import { IsString, Length } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @Length(3, 20)
  username: string;

  @IsString()
  @Length(8)
  password: string;
}
