const { Breed, Temperament } = require('../../../db.js')
const axios = require('axios')

getFromApi = async () => {
    const apiInfo = await axios.get('https://api.thedogapi.com/v1/breeds')
    const mappedApiInfo = apiInfo.data.map(breed => {
        return {
            id: breed.id,
            name: breed.name,
            height: breed.height.metric,
            weight: breed.weight.metric.includes("NaN") ? "99 " : breed.weight.metric,
            life_span: breed.life_span,
            temperaments: breed.temperament,
            image: breed.image.url
        }
    })
    return mappedApiInfo
}

const getFromDb = async () => {
    const dbInfo = await Breed.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [] 
            }
        }
    })
    return dbInfo
}

const getAllDogs = async () => {
    const fromApi = await getFromApi()
    const fromDb = await getFromDb()
    const all = fromApi.concat(fromDb)
    return all
}


module.exports = {getAllDogs}