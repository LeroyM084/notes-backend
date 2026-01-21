import { Transform } from "class-transformer"
import { IsNumber, IsString } from "class-validator"

export class MessageDTO {
    @IsString()
    content: string

    @IsNumber()
    @Transform(({ value }) => Number(value))
    conversationId: number

}
