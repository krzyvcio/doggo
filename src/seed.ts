import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AuthService } from './auth/services/auth.service';
import { RequestContext } from './shared/request-context/request-context.dto';
import { CreateUserInput } from './user/dtos/user-create-input.dto';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    //register superuser
    const authService = app.get(AuthService);

    await authService.registerSuperAdmin(
        new RequestContext(),
        <CreateUserInput>{
            username: 'superadmin',
            password: '!23Haslo',
            email: 'rusinm@gmail.com',
            name: 'admin',
            firstName: 'Super',
            lastName: 'Admin',
        },
        false,
    );
    await app.close();
}

void bootstrap().then((r) => console.log('SEEDS COMPLETE'));
