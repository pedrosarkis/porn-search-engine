"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    constructor(title, url, tags, description, duration, thumbnail) {
        this.title = title;
        this.url = url;
        this.tags = tags;
        this.description = description;
        this.duration = duration;
        this.thumbnail = thumbnail;
    }
    getTitle() {
        return this.title;
    }
    getThumbnail() {
        return this.thumbnail;
    }
    getUrl() {
        return this.url;
    }
    getTags() {
        return this.tags;
    }
    getDescription() {
        return this.description;
    }
    getDuration() {
        return this.duration;
    }
}
exports.default = Video;
