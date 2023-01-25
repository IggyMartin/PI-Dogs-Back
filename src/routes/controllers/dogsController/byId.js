const { getAllDogs } = require('./getAllDogs.js')

const getDogById = async (req, res) => {
    const { id } = req.params
    const allDogs = await getAllDogs()
    const dog = allDogs.find(breed => breed.id == id)
    if(dog) {
        res.json(dog)
    } else {
        res.status(404).send("Dog not found")
    }
}

module.exports = {getDogById}