import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MessageEntity } from "./entities/message.entities";
import { Repository } from "typeorm";

@Injectable()
export class MessageRepository {
    constructor(
        @InjectRepository(MessageEntity)
        private readonly messageRepository: Repository<MessageEntity>,
    ) { }

}