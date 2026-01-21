import { Expose } from "class-transformer"
import { IsString } from "class-validator"


export class MessageLoggerPresenter {
    @Expose()
    @IsString()
    username: string

    

}