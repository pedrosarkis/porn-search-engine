import Video from "../entities/Video"
import cheerio from 'cheerio'

abstract class SearchService {
    protected videos: Video[] = []
    protected baseURL = ''

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }

    protected addVideo(video: Video) {
        this.videos.push(video)
    }

    protected getVideos() {
        return this.videos
    }

    abstract search(query: string): Promise<Video[]>
}

export default SearchService