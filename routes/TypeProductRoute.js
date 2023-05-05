const typeproduct_router = require("express").Router();
const TypeProductController = require("../controller/TypeProductController");

typeproduct_router.get('/', TypeProductController.GetAll);

typeproduct_router.get('/search', (req,res) => {
	
})

typeproduct_router.get('/create', (req, res) => {
	
})

typeproduct_router.post('/create', (req, res) => {
	
})

typeproduct_router.get('/:id', (req, res) => {
	
})
module.exports = typeproduct_router;