const { Router } = require('express')
const { getTemperaments } = require('./controllers/tempController/allTempsR.js')
const router = Router()

router.get('', getTemperaments)

module.exports = router