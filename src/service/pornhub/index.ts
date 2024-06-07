import cheerio from 'cheerio'
import Video from '../../entities/Video'
import SearchService from '../searchService'
import fs from 'fs'

class PornhubService extends SearchService {
    constructor() {
        super('https://www.pornhub.com')
    }

    private normalizeData(data: string) {
        //"\n                \n                                                            I received the boy to put the wallpaper on and took off all my clothes and gave it to him                \n
        //remove all \n and spaces
        return data.replace(/\n/g, '').trim()
    }

    async search(query: string, page: number = 0) {
        const queryFormatted = query.split(' ').join('+')
        let url = `${this.baseURL}/video/search?search=${queryFormatted}`
        if (page > 0) {
            url += `&page=${page}`
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
        const data = await (await fetch(url)).text()
        const $ = cheerio.load(data)
        const videos = $('div[data-action="search"]')
        videos.each((index, element) => {
            const title = this.normalizeData($(element).find('.title').text())
            const url = this.baseURL + $(element).find('.title a').attr('href')
            const thumbnail = $(element).find('.videoThumb').attr('src') || ''
            const duration = this.normalizeData($(element).find('.duration').text()) 
            const tags: string[] = []
            const description = ''
            const video = new Video(title, url, tags, description, duration, thumbnail)
            this.addVideo(video)
        })      
        return this.getVideos()
    }
}

export default PornhubService