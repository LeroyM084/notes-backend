import { Controller, Get, Param, Body, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { MessageService } from "./message.service";
import { MessageDTO } from "./types/message.dto";

@Controller("message")
export class MessageController {
    constructor(private readonly messageService: MessageService) {}
    
    @Post("send")
    @HttpCode(HttpStatus.OK)
    postMessage(@Body() body: MessageDTO){
        // Envoie un message dans une discussion spécifique
    }
}