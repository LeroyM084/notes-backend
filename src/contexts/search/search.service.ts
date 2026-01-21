import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  getSearch(id: string): string {
    console.log('Fetching search for id:', id);
    return `Search with id ${id}`;
  }
}
