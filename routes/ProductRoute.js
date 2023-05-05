const product_router = require("express").Router();
const ProductController = require("../controller/ProductController");

product_router.get('/', ProductController.GetAll);

product_router.get('/search', (req,res) => {
	
})

product_router.get('/create', (req, res) => {
	
})

product_router.post('/create', (req, res) => {
	
})

product_router.get('/:id', (req, res) => {
	
})
module.exports = product_router;