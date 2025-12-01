import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { UserRole } from '@/generated/prisma/enums';

@Injectable()
export class ApprovedManagerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('You must be logged in');
    }

    if (user.role !== UserRole.MANAGER) {
      throw new ForbiddenException('Only managers can perform this action');
    }

    if (!user.approved) {
      throw new ForbiddenException('Your manager account is not approved yet');
    }

    return true;
  }
}
