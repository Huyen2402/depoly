const db = require("../db/index");
const TypeProduct = db.TypeProduct;
const Product = db.Product;
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("Products", {
        ID: {
        type: Sequelize.INTEGER
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
      TypeProduct: {
        type: Sequelize.INTEGER
      }
    },{
      associate: function (models) {
        Product.belongsTo(
            models.TypeProduct,
            { foreignKey: 'TypeProduct' }
        );
        
    }
    });
    
    return Product;
  };