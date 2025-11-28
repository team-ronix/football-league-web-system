import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    login(userName: string, password: string): Promise<LoginResponseDto>;
}
