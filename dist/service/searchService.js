"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchService {
    constructor(baseURL) {
        this.videos = [];
        this.baseURL = '';
        this.baseURL = baseURL;
    }
    addVideo(video) {
        this.videos.push(video);
    }
    getVideos() {
        return this.videos;
    }
}
exports.default = SearchService;
