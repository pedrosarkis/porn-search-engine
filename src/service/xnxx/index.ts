import cheerio from 'cheerio'
import Video from '../../entities/Video'
import SearchService from '../searchService'

class XnxxService {
    constructor() {
        this.baseURL = 'https://www.xnxx.com'
    }
    
    async search(query) {
        const videoList = []
        
        const queryFormatted = query.split(' ').join('+')
        console.log(queryFormatted, 'xnxx')
        const url = `${this.baseURL}/search/${queryFormatted}`
     
        const data = await this.fetchToText(url)
        const $ = cheerio.load(data)
        
        const videos = $('.thumb-block').not('.thumb-block-profile')
        videos.each((index, element) => {
            const title = $(element).find('.title').text()
            const url = this.baseURL + $(element).find('.title a').attr('href')
            const thumbnail = $(element).find('.thumb img').attr('data-src') || ''
            const duration = $(element).find('.duration').text()
            const tags = []
            const description = ''
            const video = new Video(title, url, tags, description, duration, thumbnail)
            videoList.push(video)
        })

        return videoList

    }
}