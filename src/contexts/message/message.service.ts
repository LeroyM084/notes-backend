import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessage(id: string): string {
    console.log('Fetching message for id:', id);
    return `Message with id ${id}`;
  }
}
