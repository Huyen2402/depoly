const db = require("../db/index");
const TypeProduct = db.TypeProduct;
const Product = db.Product;
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("Products", {
        ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
          autoIncrement: true,
        primaryKey: true
      },
      CodeID: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.DECIMAL
      },
      TotalProduct: {
        type: Sequelize.INTEGER
      },
      Img: {
        type: Sequelize.STRING
      },
      TypeProductID: {
        type: Sequelize.INTEGER
      }
    },{
   
    });
    Product.associate = (Models) => {
      Product.belongsTo(Models.TypeProduct, {
        foreignKey: 'TypeProductID',
        targetKey: 'ID',
      });
    };
    
    return Product;
  };