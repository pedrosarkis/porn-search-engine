import PornHubSearch from '../../src/service/pornhub/index'
import fs from 'fs'
import { jest } from '@jest/globals'



describe('PornHubSearch', () => {
    let pornHubSearch: PornHubSearch
    let html: string

     beforeEach(() => {
        pornHubSearch = new PornHubSearch()
         html = fs.readFileSync('tests/mocks/pornhub.html', 'utf-8')
            global.fetch = jest.fn(() => Promise.resolve(
                new Response(html, {
                status: 200,
                headers: { 'Content-type': 'text/html' }
                })
            ))
     })

    test('search should scrape the videos', async () => {
        const videos = await pornHubSearch.search('elisa-sanches')
        expect(videos).toHaveLength(29)
    })
})
