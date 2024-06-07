import cheerio from 'cheerio'
import Video from '../../entities/Video'
import SearchService from '../searchService'

class XvideosService extends SearchService {
    constructor() {
        super('https://www.xvideos.com')
    }
    
    async search(query: string, page: number = 0) {
        // url com page k=elisa+sanches&p=1
        //https://www.xvideos.com/?k=elisa+sanches
        const queryFormatted = query.split(' ').join('+')
        const url = `https://www.xvideos.com/?k=${queryFormatted}&p=${page}`
        //<div id="video_78791995" data-id="78791995" class="frame-block thumb-block  "><div class="thumb-inside"><div class="thumb"><a href="/video.ubiuokb28e3/elisa_sanches_fodendo_com_o_personal_sortudo"><img src="https://static-cdn77.xvideos-cdn.com/img/lightbox/lightbox-blank.gif" data-src="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169/6a/ed/a7/6aeda733950d10340d5ae106fd079b74/6aeda733950d10340d5ae106fd079b74.2.jpg" data-idcdn="10" data-videoid="78791995" id="pic_78791995" /><span class="video-hd-mark">1080p</span></a></div></div><div class="thumb-under"><p class="title"><a href="/video.ubiuokb28e3/elisa_sanches_fodendo_com_o_personal_sortudo" title="Elisa Sanches fodendo com o personal sortudo">Elisa Sanches fodendo com o personal sortudo <span class="duration">21 min</span></a></p><p class="metadata"><span class="bg"><span class="duration">21 min</span><span><a href="/profiles/paueagua10"><span class="name">Paueagua10</span></a><span class="sprfluous"> - </span></span></span></p></div><script>xv.thumbs.prepareVideo(78791995);</script></div>
        const data = await (await fetch(url)).text()
        const $ = cheerio.load(data)
        //query class thumb-block and exclude class thumb-block-profile]
        //falta fazer a paginação, pois no x videos é diferente
        const videos = $('.thumb-block').not('.thumb-block-profile')
        videos.each((index, element) => {
            const title = $(element).find('.title').text()
            const url = this.baseURL + $(element).find('.title a').attr('href')
            const thumbnail = $(element).find('.thumb img').attr('data-src') || ''
            const duration = $(element).find('.duration').text()
            const tags: string[] = []
            const description = ''
            const video = new Video(title, url, tags, description, duration, thumbnail)
            this.addVideo(video)
        })

        return this.getVideos()

    }
}

export default XvideosService