const Cars = require('./cars-model.js')
const db = require('../data/config.js')

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
            await db('cars').insert({ name: 'tesla' })
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

    describe('update()', () => {
        it('can update', async () => {
            await db('cars').insert({name: 'tesla'})
            let car = await Cars.update(1, { name: 'ford'})
            expect(car).toMatchObject({ id: 1, name: 'ford'})
            car = await db('cars').where({id:1}).first()
            expect(car.name).toBe('ford')
        })
    })

    describe('remove', () => {
        it('can remove car', async () => {
            await db('cars').insert({ name: 'ford'})
            await Cars.remove(1)
            let car = await db('cars')
            expect(car).toHaveLength(0)
            expect(car).toEqual([])
        })
    })
})
