import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserCredentialsEntity } from "./entities/user_credentials.entities";
import { AUTH_REPOSITORY } from "./auth.repository.interface";
import { AuthRepository } from "./auth.repository";
import { PASSWORD_HASHER } from "./interface/password-hasher.interface";
import { PasswordHasherService } from "./password-hasher.service";

@Module({
    imports: [TypeOrmModule.forFeature([
        UserCredentialsEntity
    ])],
    controllers: [AuthController],
    providers: [AuthService, 
        {provide: AUTH_REPOSITORY, useClass: AuthRepository},
        {provide: PASSWORD_HASHER, useClass: PasswordHasherService}
    ],
})
export class AuthModule {}