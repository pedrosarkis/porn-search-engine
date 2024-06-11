import YeptubeSearch from '../../src/service/yeptube/index'
import fs from 'fs'
import { jest } from '@jest/globals'



describe('YeptubeSearch', () => {
    let yeptubeSearch: YeptubeSearch
    let html: string

     beforeEach(() => {
        yeptubeSearch = new YeptubeSearch()
         html = fs.readFileSync('tests/mocks/yeptube.html', 'utf-8')
            global.fetch = jest.fn(() => Promise.resolve(
                new Response(html, {
                status: 200,
                headers: { 'Content-type': 'text/html' }
                })
            ))
     })

    test('search should scrape the videos', async () => {
        const videos = await yeptubeSearch.search('elisa-sanches')
        expect(videos).toHaveLength(7)
    })
})
