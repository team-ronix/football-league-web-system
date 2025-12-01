import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { UserRole } from '@/generated/prisma/enums';

@Injectable()
export class ManagerGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    if (!request.isAuthenticated()) {
      return false;
    }

    const user = request.user;
    if (user.role !== UserRole.MANAGER) {
      throw new ForbiddenException('Access restricted to managers only');
    }

    return true;
  }
}
