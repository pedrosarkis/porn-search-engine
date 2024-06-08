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
const Video_1 = __importDefault(require("../../entities/Video"));
const cheerio_1 = __importDefault(require("cheerio"));
const searchService_1 = __importDefault(require("../searchService"));
const fs_1 = __importDefault(require("fs"));
class EpornService extends searchService_1.default {
    constructor() {
        super('https://www.eporner.com');
    }
    search(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, page = 1) {
            const queryFormatted = query.split(' ').join('-');
            const pageString = page > 1 ? page : '';
            const data = yield (yield (fetch(`${this.baseURL}/search/${queryFormatted}/${pageString}`))).text();
            const $ = cheerio_1.default.load(data);
            fs_1.default.writeFileSync('eporn.html', data);
            //<div class="mb hdy" data-id="7233862" data-vp="7233862|0|2" id="vf7233862"><div class="mvhdico" title="Quality"><span>1080p</span></div><div class="mbimg"><div class="mbcontent"><a href="/video-2UM7toqnp16/elisaa-sanches2/"><img src="https://static-ca-cdn.eporner.com/thumbs/static4/7/72/723/7233862/13_240.jpg" data-st="7233862|13|0" alt="ELISAA SANCHES2" /></a></div></div><div class="mbunder"><p class="mbtit"><a href="/video-2UM7toqnp16/elisaa-sanches2/">ELISAA SANCHES2 - Elisa Sanches</a></p><p class="mbstats"><span class="mbtim" title="Duration">35:17</span><span class="mbrate" title="Rating">87%</span><span class="mbvie" title="Views">873,022</span><span class="mb-uploader"><a href="/profile/santos101500abc/" title="Uploader">santos101500abc</a></span></p></div></div>
            const videos = $('#vidresults .mb');
            const pages = $('.numlist2 a').length - 1; // -1 because the last element is the next page button, but i need to review this, cuz it seems not quite right
            videos.each((index, element) => {
                const title = $(element).find('.mbtit a').text();
                const url = $(element).find('.mbtit a').attr('href') || '';
                const thumbnail = $(element).find('.mbimg img').attr('src') || '';
                const tags = $(element).find('.mbunder .mbstats').text().split(' ');
                const description = $(element).find('.mbunder .mbstats').text();
                const duration = $(element).find('.mbtim').text();
                this.addVideo(new Video_1.default(title, this.baseURL + url, tags, description, duration, thumbnail));
            });
            if (page < pages) {
                yield this.search(query, page + 1);
            }
            return this.getVideos();
        });
    }
}
exports.default = EpornService;
