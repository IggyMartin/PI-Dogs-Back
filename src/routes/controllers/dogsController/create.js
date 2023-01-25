const { Breed, Temperament } = require('../../../db.js')
const { getTemperaments } = require('../tempController/allTempsR.js')

const createDog = async (req, res) => {
    function randomImage() {
        var images = [
            image1 = "https://dogsqueensland.org.au/media/1003/buying-a-dog.jpg",
            image2 = "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/481298",
            image3 = "https://cdn.mos.cms.futurecdn.net/3BfMBs6ss7tsb556iyNMGR-1200-80.jpg",
            image4 = "https://c.tenor.com/ISsgBwnD3bYAAAAC/doggie-dance-dancing.gif",
            image5 = "https://i.pinimg.com/originals/8a/65/09/8a65099b8decea8b7eb43213db0c76ea.jpg"]

        let img = Math.floor(Math.random() * 5)

        return images[img]
    }
    try {
        const { name, weight, height, life_span, temperament } = req.body
        const newBreed = await Breed.create({
            name,
            weight,
            height,
            life_span,
            image: randomImage(),
            created: true
        })
        const newBreedTemperaments = await Temperament.findAll({
            where: {name: temperament}
        })
        /* console.log(newBreedTemperaments) */
        newBreed.addTemperament(newBreedTemperaments)
        res.send(newBreed)        
    } catch (error) {
        res.json({error: error})
    }
}

module.exports = { createDog }