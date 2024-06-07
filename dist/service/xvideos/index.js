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
const Video_1 = __importDefault(require("../../entities/Video"));
const searchService_1 = __importDefault(require("../searchService"));
class XvideosService extends searchService_1.default {
    constructor() {
        super('https://www.xvideos.com');
    }
    search(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, page = 0) {
            // url com page k=elisa+sanches&p=1
            //https://www.xvideos.com/?k=elisa+sanches
            const queryFormatted = query.split(' ').join('+');
            const url = `${this.baseURL}/?k=${queryFormatted}&p=${page}`;
            //<div id="video_78791995" data-id="78791995" class="frame-block thumb-block  "><div class="thumb-inside"><div class="thumb"><a href="/video.ubiuokb28e3/elisa_sanches_fodendo_com_o_personal_sortudo"><img src="https://static-cdn77.xvideos-cdn.com/img/lightbox/lightbox-blank.gif" data-src="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169/6a/ed/a7/6aeda733950d10340d5ae106fd079b74/6aeda733950d10340d5ae106fd079b74.2.jpg" data-idcdn="10" data-videoid="78791995" id="pic_78791995" /><span class="video-hd-mark">1080p</span></a></div></div><div class="thumb-under"><p class="title"><a href="/video.ubiuokb28e3/elisa_sanches_fodendo_com_o_personal_sortudo" title="Elisa Sanches fodendo com o personal sortudo">Elisa Sanches fodendo com o personal sortudo <span class="duration">21 min</span></a></p><p class="metadata"><span class="bg"><span class="duration">21 min</span><span><a href="/profiles/paueagua10"><span class="name">Paueagua10</span></a><span class="sprfluous"> - </span></span></span></p></div><script>xv.thumbs.prepareVideo(78791995);</script></div>
            const data = yield (yield fetch(url)).text();
            const $ = cheerio_1.default.load(data);
            //query class thumb-block and exclude class thumb-block-profile]
            //falta fazer a paginação, pois no x videos é diferente
            const videos = $('.thumb-block').not('.thumb-block-profile');
            videos.each((index, element) => {
                const title = $(element).find('.title').text();
                const url = this.baseURL + $(element).find('.title a').attr('href');
                const thumbnail = $(element).find('.thumb img').attr('data-src') || '';
                const duration = $(element).find('.duration').text();
                const tags = [];
                const description = '';
                const video = new Video_1.default(title, url, tags, description, duration, thumbnail);
                this.addVideo(video);
            });
            return this.getVideos();
        });
    }
}
exports.default = XvideosService;
