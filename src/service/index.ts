import EpornService from './eporn/index'
import XvideosService from './xvideos/index'  
import PornHubService from './pornhub/index'
import AggregatedSearchService from './AggregatedSearchService'
import YepTubeService from './yeptube/index'

const epornService = new EpornService()
const xvideosService = new XvideosService()
const pornhubService = new PornHubService()
const yeptubeService = new YepTubeService()


const aggregatedSearchService = new AggregatedSearchService(
    [
        epornService,
        xvideosService,
        pornhubService,
        yeptubeService
    ])

export default aggregatedSearchService
