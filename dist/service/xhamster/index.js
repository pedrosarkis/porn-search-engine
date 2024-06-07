"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const searchService_1 = __importDefault(require("../searchService"));
const Video_1 = __importDefault(require("../../entities/Video"));
const fs_1 = __importDefault(require("fs"));
class XhamsterService extends searchService_1.default {
    constructor() {
        super('https://xhamster.com');
    }
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryFormatted = query.split(' ').join('+');
            const url = `${this.baseURL}/search/${queryFormatted}`;
            const data = yield (yield fetch(url)).text();
            const $ = cheerio_1.default.load(data);
            fs_1.default.writeFileSync('xhamster.html', data);
            //scrap on every element that has the data-video-id regardless of the value
            //get all divs with data-video-id attribute
            //data-testid=video-duration is on the duration is, not a class data-testid is the attribute and video-duration is the value
            const videos = $('div[data-video-id]');
            videos.each((index, element) => {
                const title = $(element).find('.thumb-image-container__image').attr('alt') || '';
                const url = $(element).find('.video-thumb__image-container').attr('href') || '';
                const thumbnail = $(element).find('.thumb-image-container__image').attr('src') || '';
                const tags = $(element).find('.thumb-list__tags').text().split(' ');
                const description = $(element).find('.thumb-list__description').text();
                const duration = $(element).find('div[data-testid="video-duration"]').text();
                const video = new Video_1.default(title, url, tags, description, duration, thumbnail);
                this.addVideo(video);
            });
            return this.getVideos();
        });
    }
}
exports.default = XhamsterService;
