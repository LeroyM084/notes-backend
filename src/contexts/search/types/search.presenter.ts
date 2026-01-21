import { Expose } from "class-transformer"
import { IsString } from "class-validator"


export class SearchContactLoggerPresenter {
    @Expose()
    @IsString()
    username: string[]
}