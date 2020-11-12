const db = require('../data/config.js')

module.exports = {
    add,
    findBy,
    findById,
    getAll,
    update,
    remove,

}

async function add(car) {
    const [id] = await db('cars').insert(car)
    return db('cars').where({id}).first()
}

async function findBy() {
    return null
}

async function findById() {
    return null
}

async function getAll() {
    return db('cars')
}

async function update() {
    return null
}

async function remove() {
    return null
}