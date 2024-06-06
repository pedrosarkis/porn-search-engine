import cheerio from 'cheerio'
import Video from '../../entities/Video'

class XvideosService {
    private videos: Video[] = []
    private baseURL = 'https://www.xvideos.com'

    addVideo(video: Video) {
        this.videos.push(video)
    }

    getVideos() {
        return this.videos
    }
    
    async search(query: string) {
        // ...
    }
}