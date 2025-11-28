import { UsersService } from './users.service';
import { LoginUserDto } from './dto/loginUserDto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { LoginResponseDto } from './dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(loginUserDto: LoginUserDto): Promise<ApiResponse<LoginResponseDto>>;
}
