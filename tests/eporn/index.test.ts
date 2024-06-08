import EpornService from '../../src/service/eporn/index'
import fs from 'fs'
import { jest } from '@jest/globals'
jest.setTimeout(10000)



describe('EpornSearch', () => {
    let epornService: EpornService
    let html: string

     beforeEach(() => {
         epornService = new EpornService()
         html = fs.readFileSync('tests/mocks/eporn.html', 'utf-8')
         global.fetch = jest.fn(() => Promise.resolve(
             new Response(html, {
             status: 200,
             headers: { 'Content-type': 'text/html' }
             })
         ))
     })

    test('search should scrape the videos', async () => {
        const videos = await epornService.search('elisa-sanches')
        expect(videos).toHaveLength(248)
    })
})
