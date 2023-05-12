const config = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.db.DB, config.db.USER, config.db.PASSWORD, {
    host: config.db.HOST,
    port: config.db.PORT,
    dialect: config.db.dialect,
    pool: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  });
  const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require("../model/UserModel")(sequelize, Sequelize);
db.Product = require("../model/ProductModel")(sequelize, Sequelize);
db.TypeProduct= require("../model/TypeProductModel")(sequelize, Sequelize);
db.Bill= require("../model/BillModel")(sequelize, Sequelize);
db.BillDetail= require("../model/BillDetail")(sequelize, Sequelize);
(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
       // intercept sequelize `set()` to set column as null if the provided value is empty string ''
   
    // import all models file
    

    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });

    
  })();



module.exports = db;