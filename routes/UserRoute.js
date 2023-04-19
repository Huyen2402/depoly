const user_router = require("express").Router();
const UserController = require("../controller/UserController");
user_router.get('/', UserController.GetAll)

user_router.get('/search', (req,res) => {
	
})

user_router.get('/create', (req, res) => {
	
})

user_router.post('/create', (req, res) => {
	
})

user_router.get('/:id', (req, res) => {
	
})
module.exports = user_router;