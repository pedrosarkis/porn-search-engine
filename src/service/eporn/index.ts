import Video from '../../entities/Video'
import cheerio from 'cheerio'
import SearchService from '../searchService'
class EpornService extends SearchService{
   
    constructor() {
        super('https://www.eporner.com')
    }
    async search(query: string, page: number = 1) {
        const queryFormatted = query.split(' ').join('-')
        const pageString = page > 1 ? page : ''
        const data = await (await (fetch(`${this.baseURL}/search/${queryFormatted}/${pageString}`))).text()
        const $ = cheerio.load(data)
        //<div class="mb hdy" data-id="7233862" data-vp="7233862|0|2" id="vf7233862"><div class="mvhdico" title="Quality"><span>1080p</span></div><div class="mbimg"><div class="mbcontent"><a href="/video-2UM7toqnp16/elisaa-sanches2/"><img src="https://static-ca-cdn.eporner.com/thumbs/static4/7/72/723/7233862/13_240.jpg" data-st="7233862|13|0" alt="ELISAA SANCHES2" /></a></div></div><div class="mbunder"><p class="mbtit"><a href="/video-2UM7toqnp16/elisaa-sanches2/">ELISAA SANCHES2 - Elisa Sanches</a></p><p class="mbstats"><span class="mbtim" title="Duration">35:17</span><span class="mbrate" title="Rating">87%</span><span class="mbvie" title="Views">873,022</span><span class="mb-uploader"><a href="/profile/santos101500abc/" title="Uploader">santos101500abc</a></span></p></div></div>
        const videos = $('#vidresults .mb')
        const pages = $('.numlist2 a').length - 1 // -1 because the last element is the next page button, but i need to review this, cuz it seems not quite right

        videos.each((index, element) => {
            const title = $(element).find('.mbtit a').text()
            const url = $(element).find('.mbtit a').attr('href') || ''
            const thumbnail = $(element).find('.mbimg img').attr('src') || ''
            const tags = $(element).find('.mbunder .mbstats').text().split(' ')
            const description = $(element).find('.mbunder .mbstats').text()
            const duration =  $(element).find('.mbtim').text()
            this.addVideo(new Video(title, this.baseURL + url, tags, description, duration, thumbnail))
        })
        
        if (page < pages) {
            await this.search(query, page + 1)
        }

        return this.getVideos()
    }
}

export default EpornService