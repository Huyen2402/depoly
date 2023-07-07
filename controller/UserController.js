const db = require("../db/index");
const User = db.User;
const _ = require('lodash');
const jwtHelper = require("../helpers/jwt.helper");
const debug = console.log.bind(console);
require('dotenv').config();
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
// Thời gian sống của refreshToken
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE;
// Mã secretKey này phải được bảo mật tuyệt đối, các bạn có thể lưu vào biến môi trường hoặc file
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};
exports.login = async (req, res) => {
    console.log('login', req.body.Email);
  try {
    const username = req.body.Email;
    const pass = req.body.Password;
    
    const user = await User.findOne({ where: { Email: username, Password: pass } });
    const userFakeData = {
      _id: user.id,
      name: user.FirstName + ' ' + user.LastName,
      email: user.email,
    };
    const accessToken = await jwtHelper.generateToken(userFakeData, accessTokenSecret, accessTokenLife);
    const refreshToken = await jwtHelper.generateToken(userFakeData, refreshTokenSecret, refreshTokenLife);
    console.log(user);
    console.log(accessToken);
    if(_.isNil(user)){
        res.json( {data: "Không tồn tại user", errorCode: 1});
    }
    return res.status(200).json({accessToken, refreshToken});
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