"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchRepository {
    constructor(searchService) {
        this.searchService = searchService;
    }
    search(query) {
        return Promise.resolve(this.searchService.search(query));
    }
}
exports.default = SearchRepository;
