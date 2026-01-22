import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ConversationEntity } from "./entities/conversation.entities";
import { Repository } from "typeorm";

@Injectable()
export class ConversationRepository {
    constructor(
        @InjectRepository(ConversationEntity)
        private readonly conversationRepository: Repository<ConversationEntity>,
    ) { }

}