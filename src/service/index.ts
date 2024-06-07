import EpornService from './eporn/index'
import XvideosService from './xvideos/index'  
import PornHubService from './pornhub/index'
import AggregatedSearchService from './AggregatedSearchService'

const epornService = new EpornService()
const xvideosService = new XvideosService()
const pornhubService = new PornHubService()


const aggregatedSearchService = new AggregatedSearchService([epornService, xvideosService, pornhubService ])

export default aggregatedSearchService
