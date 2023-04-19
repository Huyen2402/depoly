const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res, next) =>{
    res.json("Welcome to Web of Nhu Huyen")
});
module.exports = app;