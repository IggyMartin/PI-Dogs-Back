const axios = require('axios')
const { Breed, Temperament } = require('../../../db.js')

const apiTemperaments = async () => {
    const apiData = await axios.get('https://api.thedogapi.com/v1/breeds')
    return apiData.data
}

const getTemperaments = async (req, res) => {
    try {
        const info = await apiTemperaments()
        const mappedTemperaments = info.map(breed => breed.temperament)
        const temperamentsReady = mappedTemperaments.join().split(',')
        temperamentsReady.forEach(temp => {
            temperamentName = temp.trim()
                Temperament.findOrCreate({
                where: {name: temperamentName}
            })
        })
        const temperaments = await Temperament.findAll()
    
        res.json(temperaments)     
    } catch (error) {
        res.json({error: error})
    }
}

module.exports = {getTemperaments}