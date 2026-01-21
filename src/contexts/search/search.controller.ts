import { Controller, Get, Param } from "@nestjs/common";
import { SearchService } from "./search.service";

@Controller("search")
export class SearchController {
    constructor(private readonly searchService: SearchService) {}
    @Get("contact/:username")
    getSearch(@Param('username') username: string): string {
        console.log('Received request for search with username:', username);
        return this.searchService.getSearch(username);
    }
    @Get("message/:content")
    getMessage(@Param('content') content: string): string {
        return "un message à chercher: " + content;
    }
}