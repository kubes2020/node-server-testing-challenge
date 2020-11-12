const Cars = require('./cars-model.js')
const db = require('../data/config.js')
const { default: expectCt } = require('helmet/dist/middlewares/expect-ct')

beforeEach(async () => {
    await db('cars').truncate()
})

describe('cars model', () => {
    describe('getAll()', () => {
        it('gets an empty array', async () => {
            const cars = await Cars.getAll()
            expect(cars).toHaveLength(0)
        })
        it('gets all cars', async () => {
            await db('cars').insert({ name: 'ford' })
            let cars = await Cars.getAll()
            expect(cars).toHaveLength(1)
            await db('cars').insert({ name: 'ford', name: 'tesla' })
            cars = await Cars.getAll()
            expect(cars).toHaveLength(2)
        })
    })

    describe('add car',  () => {
        it('adds a cart to db', async() => {
            await Cars.add({ name: 'tesla'})
            let car = await db('cars')
            expect(car).toHaveLength(1)
            await Cars.add({ name: 'ford'})
            car = await db('cars')
            expect(car).toHaveLength(2)         
        })
    } )

    // describe('')
})
