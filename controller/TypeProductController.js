const db = require("../db/index");
const TypeProduct = db.TypeProduct;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.GetAll = async(req, res, next) => {
    try {
    const products = await TypeProduct.findAll();
    console.log(products);
    res.json( {data: products});
    } catch (error) {
        console.log(error);
    }

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
exports.findByIDCate = async (req, res) => {
  console.log("findByIDCate", req.query.id);
  try {
    const Pros = await TypeProduct.findAll({ 
      
        include: [
        { model: db.Product, where: { TypeProductID:  req.query.id } }
      ], });
      console.log(Pros);
    res.json( {data: Pros});
  } catch (error) {
    console.log(error);
  }
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};