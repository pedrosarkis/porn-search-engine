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
const searchService_1 = __importDefault(require("../searchService"));
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = __importDefault(require("fs"));
const Video_1 = __importDefault(require("../../entities/Video"));
class YepTubeService extends searchService_1.default {
    constructor() {
        super('https://www.yeptube.com/search/videos');
    }
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryFormatted = query.split(' ').join('+');
            const url = `${this.baseURL}/${queryFormatted}`;
            const data = yield (yield fetch(url)).text();
            fs_1.default.writeFileSync('yeptube.html', data);
            const $ = cheerio_1.default.load(data, { xmlMode: true });
            const videos = $('ins');
            videos.each((_, element) => {
                const title = $(element).find('img').attr('alt') || '';
                const url = this.baseURL.replace('search/videos', '') + $(element).find('a').attr('href') || '';
                const thumbnail = $(element).find('img').attr('src') || '';
                const duration = $(element).find('span.time').text() || '';
                this.addVideo(new Video_1.default(title, url, [], '', duration, thumbnail));
            });
            return this.getVideos();
        });
    }
}
exports.default = YepTubeService;
