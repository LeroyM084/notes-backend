import { MessageEntity } from "./entities/message.entities"

export const MESSAGE_REPOSITORY = Symbol('MESSAGE_REPOSITORY');

export interface IMessageRepository {
    findCredentialsByEmail(email: string): Promise<MessageEntity | null>;
}