const { getAllDogs } = require('./getAllDogs.js')

const getDogs = async (req, res) => {
    const allDogs = await getAllDogs()
    const {name, filter} = req.query
    if(name) {
        const dogs = allDogs.filter(breed => breed.name.toLowerCase().includes(name.toLowerCase()))
        if(dogs.length) {
            res.json(dogs)
        } else {
            res.send("No dogs with such name")
        }
    } /* else if(filter) {
        if(filter === "lower") {
            const filtDogs = allDogs.sort((a, b) => {
                if(parseInt(a.height.slice(0, 2).trim()) > parseInt(b.height.slice(0, 2).trim())) {

                }
            }
    )}} */else {
        res.json(allDogs)
    }
}

module.exports = {getDogs}
