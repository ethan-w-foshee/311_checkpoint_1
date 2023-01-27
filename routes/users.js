const express = require ('express')
const router = express.Router()

const usersController = require('../controllers/users')

router.get('/', usersController.listUsers)
router.get('/:id', usersController.showUsers)
router.post('/', usersController.addUser)
router.put('/:id', usersController.changeUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router