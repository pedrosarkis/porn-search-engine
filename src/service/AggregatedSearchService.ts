import SearchService from './searchService'
import Video from '../entities/Video'
import DeduplicationStrategy from '../repositories/UrlBasedDeduplicationStrategy'

class AggregatedSearchService {
    private services: SearchService[]
    private deduplicationStrategy: DeduplicationStrategy


    constructor(services: SearchService[], deduplicationStrategy: DeduplicationStrategy) {
        this.services = services
        this.deduplicationStrategy = deduplicationStrategy
        
    }

    async search(query: string): Promise<Video[]> {
        const searchPromises = this.services.map(service => service.search(query))
        const results = await Promise.all(searchPromises)
        const allVideos =  results.flat()
        return this.deduplicationStrategy.deduplicate(allVideos)
    }
}

export default AggregatedSearchService
