const { GetAllUsers, CreateUser, UpdateUser, DeleteUser } = require('../controllers/userController')

const router = require('express').Router()

router.post('/create-user', CreateUser)
router.get('/get-all-users', GetAllUsers)
router.put('/update-user', UpdateUser)
router.post('/delete-user', DeleteUser)

module.exports = router