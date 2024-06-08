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
const fs_1 = __importDefault(require("fs"));
class PornhubService extends searchService_1.default {
    constructor() {
        super('https://www.pornhub.com');
    }
    normalizeData(data) {
        //"\n                \n                                                            I received the boy to put the wallpaper on and took off all my clothes and gave it to him                \n
        //remove all \n and spaces
        return data.replace(/\n/g, '').trim();
    }
    search(query_1) {
        return __awaiter(this, arguments, void 0, function* (query, page = 0) {
            const queryFormatted = query.split(' ').join('+');
            let url = `${this.baseURL}/video/search?search=${queryFormatted}`;
            if (page > 0) {
                url += `&page=${page}`;
            }
            // results inside of ul <ul class="videoList" id="videoListSearchResults">
            // al videos are inside div with attribute data-action="search"
            // <div data-action="search"  class="positionRelative videoWrapper " data-token="MTcxNzc2MjcxOB9yAh1nveq6HkRd2iprk9CLvaEeasFv-Rbgg95lxdLzBBDUEG1B3cmC6hxQFGWx88XEPLZeVsqR6s9jsfxKTdI." data-video-id="video395831851" data-pid="" data-id="395831851">
            //                         <div class="positionRelative singleVideo">
            //         <a  class=" js-pop gradientBottom js-popUnder imageLink js-flipbookOn js-videoPreview webm-videoPreview"
            //                                    href="/view_video.php?viewkey=ph615b7099eaa4d"
            //              data-webm="https://ew.phncdn.com/videos/202110/04/395831851/360P_360K_395831851_fb.mp4?validfrom=1717758852&validto=1717766052&rate=150k&burst=1000k&ipa=90.131.37.90&hash=Xz6LYcfxWltHVnRnZjINPEeIHzE%3D" data-poster="https://ei.phncdn.com/videos/202110/04/395831851/original/(m=eGNdHgaaaa)(mh=IF8wkzvpcxXOwL3X)8.jpg" onclick="setEntryCookie('VidPg-premVid')"  >
            //                                     <div class="webm-preloadLine js-preloadLineWebm"></div>
            //                                                                             <img class="videoThumb js-videoThumb js-videoThumbWebm"
            //                      src="https://ei.phncdn.com/videos/202110/04/395831851/original/(m=eGNdHgaaaa)(mh=IF8wkzvpcxXOwL3X)8.jpg"
            //                      loading="lazy"
            //                      alt="Banho gostoso com a Elisa Sanches"
            //                      data-path="https://ei.phncdn.com/videos/202110/04/395831851/original/(m=eGNdHgaaaa)(mh=IF8wkzvpcxXOwL3X)8.jpg"
            //                      data-thumbs="16">
            //                                                                                                                     <div class="videopv"></div>
            //         </a>
            //                             <div class="duration thumbOverlay hideInUserStream">
            //                                                                                                                 <span class="time">6:35</span>
            const data = yield (yield fetch(url)).text();
            const $ = cheerio_1.default.load(data);
            const videos = $('div[data-action="search"]');
            fs_1.default.writeFileSync('pornhub.html', data);
            videos.each((index, element) => {
                const title = this.normalizeData($(element).find('.title').text());
                const url = this.baseURL + $(element).find('.title a').attr('href');
                const thumbnail = $(element).find('.videoThumb').attr('src') || '';
                const duration = this.normalizeData($(element).find('.duration').text());
                const tags = [];
                const description = '';
                const video = new Video_1.default(title, url, tags, description, duration, thumbnail);
                this.addVideo(video);
            });
            return this.getVideos();
        });
    }
}
exports.default = PornhubService;
