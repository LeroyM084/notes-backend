import { Controller, Get, Param } from "@nestjs/common";
import { ConversationService } from "./conversation.service";

@Controller("conversation")
export class ConversationController {
    constructor(private readonly conversationService: ConversationService) {}
    @Get()
    getConversations(){
        // Envoie la liste des discussions de l'utilisateur
    }

    @Get(":id")
    getConversation(@Param("id") id: string){
        // Envoie les messages d'une discussion spécifique
    }
}