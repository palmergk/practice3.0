const { GetAllUsers, CreateUsers } = require('../controllers/userController')

const router = require('express').Router()

router.post('/create-user', CreateUsers)
router.get('/get-all-users', GetAllUsers)

module.exports = router