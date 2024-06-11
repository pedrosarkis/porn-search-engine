import EpornService from '../service/eporn/index'
import XvideosService from '../service/xvideos/index'  
import PornHubService from '../service/pornhub/index'
import AggregatedSearchService from './AggregatedSearchService'
import YepTubeService from '../service/yeptube/index'
import XhamsterService from '../service/xhamster/index'
import UrlBasedDeduplicationStrategy from './UrlBasedDeduplicationStrategy'

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
