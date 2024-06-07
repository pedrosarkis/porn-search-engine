import cheerio from 'cheerio'
import SearchService from '../searchService'
import Video from '../../entities/Video'
import fs from 'fs'
class XhamsterService extends SearchService {
    constructor() {
        super('https://xhamster.com')
    }

    async search(query: string) {
        const queryFormatted = query.split(' ').join('+')
        const url = `${this.baseURL}/search/${queryFormatted}`
        const data = await (await fetch(url)).text()
        const $ = cheerio.load(data)
        fs.writeFileSync('xhamster.html', data)
        //scrap on every element that has the data-video-id regardless of the value
        //get all divs with data-video-id attribute
        //data-testid=video-duration is on the duration is, not a class data-testid is the attribute and video-duration is the value
        const videos = $('div[data-video-id]')

        videos.each((index, element) => {
            const title = $(element).find('.thumb-image-container__image').attr('alt') || ''
            const url = $(element).find('.video-thumb__image-container').attr('href') || ''
            const thumbnail = $(element).find('.thumb-image-container__image').attr('src') || ''
            const tags = $(element).find('.thumb-list__tags').text().split(' ')
            const description = $(element).find('.thumb-list__description').text()
            const duration = $(element).find('div[data-testid="video-duration"]').text()
            const video = new Video(title, url, tags, description, duration, thumbnail)
            this.addVideo(video)

        })
        return this.getVideos()

    }
}
export default XhamsterService