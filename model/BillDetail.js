const db = require("../db/index");
const TypeProduct = db.TypeProduct;
const Product = db.Product;
module.exports = (sequelize, Sequelize) => {
    const BillDetail = sequelize.define("BillDetails", {
        ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
          autoIncrement: true,
        primaryKey: true
      },
      IDBill: {
        type: Sequelize.INTEGER
      },
      IDProduct: {
        type: Sequelize.INTEGER
      },
      Price: {
        type: Sequelize.DECIMAL
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
     
     
    },{
   
    });
    BillDetail.associate = (Models) => {
        BillDetail.belongsTo(Models.Bill, {
        foreignKey: 'IDBill',
        targetKey: 'ID',
      });
    };
    BillDetail.associate = (Models) => {
        BillDetail.belongsTo(Models.Product, {
        foreignKey: 'IDProduct',
        targetKey: 'ID',
      });
    };
    
    return BillDetail;
  };