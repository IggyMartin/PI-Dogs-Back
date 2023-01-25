const { Router } = require('express')
const { getDogs } = require('./controllers/dogsController/allOrByQuery.js')
const { getDogById } = require('./controllers/dogsController/byId.js')
const { createDog } = require('./controllers/dogsController/create.js')
const router = Router()

router.get('', getDogs)
router.get('/:id', getDogById)
router.post('/create', createDog)

module.exports = router
