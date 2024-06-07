import SearchService from './searchService'
import Video from '../entities/Video'

class AggregatedSearchService {
    private services: SearchService[]

    constructor(services: SearchService[]) {
        this.services = services
    }

    async search(query: string): Promise<Video[]> {
        const searchPromises = this.services.map(service => service.search(query))
        const results = await Promise.all(searchPromises)
        return results.flat()
    }
}

export default AggregatedSearchService
