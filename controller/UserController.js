const db = require("../db/index");
const User = db.User;
const _ = require('lodash');
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};
exports.login = async (req, res) => {
    console.log('login', req.body.body.Email);
  try {
    const username = req.body.body.Email;
    const pass = req.body.body.Password;
    const user = await User.findOne({ where: { Email: username, Password: pass } });
    console.log(user);
    
    if(_.isNil(user)){
        res.json( {data: "Không tồn tại user", errorCode: 0001});
    }
    res.json( {data: user,  errorCode: 0000});
  } catch (error) {
    console.log(error);
  }
};
// Retrieve all Tutorials from the database.
exports.GetAll = async(req, res, next) => {
    try {
    const project = await User.findAll();
    console.log(project);
    res.json( project );
    } catch (error) {
        console.log(error);
    }

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