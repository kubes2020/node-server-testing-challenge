const request = require('supertest')
const server = require('./server.js')

describe('server.js module', () => {
    it ('checks testing environment', () => {
        expect(process.env.DB_ENV).not.toBe('developement')
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('[GET]/', () => {
        it('works', async () => {
            return request(server).get('/')
            .expect('Content-Type', /text/)
            .expect('Content-Length', '16')
        })
    })
})

