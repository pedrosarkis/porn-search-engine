import Video from "../entities/Video"

abstract class SearchService {
    protected baseURL = ''

    constructor(baseURL: string) {
        this.baseURL = baseURL
    }

    protected async fetchToText(url: string) {
        return (await fetch(url)).text()
    }

    abstract search(query: string): Promise<Video[]>
}

export default SearchService