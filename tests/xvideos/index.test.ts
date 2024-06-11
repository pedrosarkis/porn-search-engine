import XvideosSearch from '../../src/service/xvideos/index'
import fs from 'fs'
import { jest } from '@jest/globals'
import Video from '../../src/entities/Video'



describe('XvideosSearch', () => {
    let xvideosService: XvideosSearch
    let html: string

     beforeEach(() => {
         xvideosService = new XvideosSearch()
         html = fs.readFileSync('tests/mocks/xvideos.html', 'utf-8')
            global.fetch = jest.fn(() => Promise.resolve(
                new Response(html, {
                status: 200,
                headers: { 'Content-type': 'text/html' }
                })
            ))
     })

    test('search should scrape the videos', async () => {
        const videos: Video[] = await xvideosService.search('elisa-sanches')
        expect(videos).toHaveLength(26)
    })
})
