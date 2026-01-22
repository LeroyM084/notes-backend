import { Injectable, Inject } from '@nestjs/common';
import { CONVERSATION_REPOSITORY, IConversationRepository } from './conversation.repository.interface';

@Injectable()
export class ConversationService {
  constructor(
    @Inject(CONVERSATION_REPOSITORY) private readonly conversationRepository: IConversationRepository
  ) {}
}
