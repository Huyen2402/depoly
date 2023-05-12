const db = require("../db/index");
const Bill = db.Bill;
const BillDetail = db.BillDetail;
const _ = require('lodash');
// Create and Save a new Tutorial
exports.create = async (req, res,next) => {
  console.log("create bill", req.body);
  console.log(req.body.body.BillDetails);
  try {
    // if(_.isArray(req.body.BillDetails)){
    //     const BillDetails = req.body.BillDetails.map(x => {
    //         item = {
              
    //             IDProduct: x.IDProduct,
    //             Price: x.Price,
    //             Quantity: x.Quantity
    //         }
            
    //     });
    // }
    const BillDetails = req.body.body.BillDetails;
    const model = {
        TotalPrice: req.body.body.TotalPrice,
        IDUser: req.body.body.IDUser,
        BillDetails: []
    }
    BillDetails.forEach(element => {
        model.BillDetails.push({
            IDProduct: element.IDProduct,
                Price: element.Price,
                Quantity: element.Quantity
        })
    });
    // const BillNew = await Bill.create(model);
    const BillNew = await Bill.create(model, {
        returning: true,
        include: [{
            model: BillDetail,
        }],
    });

    res.json( {data: BillNew});
  } catch (error) {
    console.log(error);
  }
};

// Retrieve all Tutorials from the database.
exports.GetAll = async(req, res, next) => {
    
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
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