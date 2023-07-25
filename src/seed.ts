import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AuthService } from './auth/services/auth.service';
import { RequestContext } from './shared/request-context/request-context.dto';
import { CreateUserInput } from './user/dtos/user-create-input.dto';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    //get context

    //register superuser
    const authService = app.get(AuthService);

    const ctx = new RequestContext();

    await authService.registerSuperAdmin(
        ctx,
        <CreateUserInput>{
            username: 'superadmin',
            password: '!23Haslo',
            email: 'rusinm@gmail.com',
            name: 'admin',
            firstName: 'Super',
            lastName: 'Admin',
        },
        true,
    );
    await app.close();
}

void bootstrap().then((r) => console.log('SEEDS COMPLETE'));
