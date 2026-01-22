import { Injectable, Inject } from '@nestjs/common';
import { MESSAGE_REPOSITORY, IMessageRepository } from './message.repository.interface';

@Injectable()
export class MessageService {
  constructor(
    @Inject(MESSAGE_REPOSITORY) private readonly messageRepository: IMessageRepository
  ) {}
}
