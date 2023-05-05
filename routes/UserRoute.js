const user_router = require("express").Router();
const UserController = require("../controller/UserController");
const QR = require('../other/bundle');
user_router.get('/QR', QR.ScanQR);
user_router.get('/', UserController.GetAll)

user_router.get('/search', (req,res) => {
	
})
user_router.post('/login', UserController.login)
user_router.get('/create', (req, res) => {
	
})

user_router.post('/create', (req, res) => {
	
})

user_router.get('/:id', (req, res) => {
	
})
module.exports = user_router;