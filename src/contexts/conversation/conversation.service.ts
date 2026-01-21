import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationService {
  getConversation(id: string): string {
    console.log('Fetching conversation for id:', id);
    return `Conversation with id ${id}`;
  }
}
