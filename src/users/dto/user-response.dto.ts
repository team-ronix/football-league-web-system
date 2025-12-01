export class UserResponseDto {
  id: number;
  username: string;
  email: string;
  createdAt: Date;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
