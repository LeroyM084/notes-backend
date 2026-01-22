import { ConversationEntity } from "./entities/conversation.entities"

export const CONVERSATION_REPOSITORY = Symbol('CONVERSATION_REPOSITORY');

export interface IConversationRepository {
    findCredentialsByEmail(email: string): Promise<ConversationEntity | null>;
}