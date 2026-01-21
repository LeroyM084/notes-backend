import { Expose } from "class-transformer"
import { IsString } from "class-validator"


export class ConversationLoggerPresenter {
    @Expose()
    @IsString()
    username: string

    @Expose()
    @IsString()
    conversationHistory: string[]

}