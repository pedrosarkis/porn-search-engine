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

    public async fetchToText(url: string) {
        return (await fetch(url)).text()
    }

    abstract search(query: string): Promise<Video[]>
}

export default SearchService

//where is the best place to mix all the services?