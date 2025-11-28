import { UserResponseDto } from './user-response.dto';

export class LoginResponseDto {
    user: UserResponseDto;

    constructor(user: UserResponseDto) {
        this.user = user;
    }
}
