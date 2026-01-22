import { Module } from "@nestjs/common";
import { ConversationController } from "./conversation.controller";
import { ConversationService } from "./conversation.service";
import { ConversationEntity } from "./entities/conversation.entities";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([
        ConversationEntity
    ])],
    controllers: [ConversationController],
    providers: [ConversationService],
})
export class ConversationModule {}