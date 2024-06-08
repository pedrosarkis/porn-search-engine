import EpornService from './eporn/index'
import XvideosService from './xvideos/index'  
import PornHubService from './pornhub/index'
import AggregatedSearchService from './AggregatedSearchService'
import YepTubeService from './yeptube/index'
import XhamsterService from './xhamster/index'
import UrlBasedDeduplicationStrategy from '../repositories/UrlBasedDeduplicationStrategy'

const epornService = new EpornService()
const xvideosService = new XvideosService()
const pornhubService = new PornHubService()
const yeptubeService = new YepTubeService()
const xhamsterService = new XhamsterService()
const deduplicationStrategy = new UrlBasedDeduplicationStrategy()


const aggregatedSearchService = new AggregatedSearchService(
    [
        epornService,
        xvideosService,
        pornhubService,
        yeptubeService,
        xhamsterService
    ],
    deduplicationStrategy
)

export default aggregatedSearchService
