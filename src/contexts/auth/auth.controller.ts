import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { LoginDTO, RegisterDTO } from "./types/auth.dto";
import { UserLoggerPresenter } from "./types/auth.presenter";
import { plainToInstance } from "class-transformer";

@Controller("auth")
export class AuthController {
    constructor() {}
    @Post("login")
    @HttpCode(HttpStatus.OK)
    login(@Body() body: LoginDTO){
        const DatabaseResult = {
            username: "Ianice",
            password: "test1234!"
        }

        return plainToInstance(UserLoggerPresenter, DatabaseResult, { excludeExtraneousValues: true });
    }
    @Post("register")
    @HttpCode(HttpStatus.OK)
    register(@Body() body: RegisterDTO){
        return null;
    }
}