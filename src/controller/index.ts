import SearchController from "./searchController"
import SearchRepository from "../repositories/searchRepository"
import SearchEporn from "../service/eporn/index"

const searchRepository = new SearchRepository(new SearchEporn())
const searchController = new SearchController(searchRepository)

export default searchController