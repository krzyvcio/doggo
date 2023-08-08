import {
    CanActivate,
    ExecutionContext,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
    ) {}

    canActivate(
        context: ExecutionContext,
    ): boolean {
        const roles = this.reflector.get<
            UserRole[]
        >('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context
            .switchToHttp()
            .getRequest();
        const user = request.user;
        console.log({
            requestUrl: request.url,
            rolesWhichAreAllowed: roles,
            userRoles: user.roles,
        });
        const hasRole = () =>
            user.roles.some((role) =>
                roles.includes(role),
            );
        return user && hasRole();
    }
}
