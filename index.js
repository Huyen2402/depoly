const app = require('./app');
const config = require('./config');
const sql = require("mssql");
const PORT = config.app.port;
const Sequelize = require("sequelize");
const db = require("./db/index");
const user_router = require("./routes/UserRoute");
const product_router = require("./routes/ProductRoute");
const typeproduct_router = require("./routes/TypeProductRoute");
const bill_router = require("./routes/BillRoute");
// app.get('/hello', function (req, res) {
//     console.log("hello");
// // // connect to your database
// // sql.connect(config.db, function (err) {
    
// //     if (err) console.log(err);

// //     // create Request object
// //     var request = new sql.Request();
       
// //     // query to the database and get the records
// //     request.query('select * from Users', function (err, recordset) {
        
// //         if (err) console.log(err)
// //         console.log(recordset);
// //         // send records as a response
// //         res.send(recordset);
        
// //     });
// // });

// });
app.use('/product', product_router);
app.use('/user', user_router);
app.use('/type', typeproduct_router);
app.use('/bill', bill_router);
db.sequelize.sync();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} and url is  http://localhost:3003/`);
})