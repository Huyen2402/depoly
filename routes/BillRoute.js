const bill_router = require("express").Router();
const BillController = require("../controller/BillController");

bill_router.post('/', BillController.create);

bill_router.get('/search', (req,res) => {
	
})

bill_router.get('/create', (req, res) => {
	
})

bill_router.post('/create', (req, res) => {
	
})

bill_router.get('/:id', (req, res) => {
	
})
module.exports = bill_router;