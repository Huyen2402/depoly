module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define("Bills", {
        ID: {
        type: Sequelize.INTEGER
      },
      
      TotalPrice: {
        type: Sequelize.DECIMAL
      },
      IDUser: {
        type: Sequelize.INTEGER
      }
      
    },{
       
    });
    Bill.associate = (Models) => {
        Bill.hasMany(Models.BillDetail, {
        foreignKey: 'IDBill',
        sourceKey: 'ID',
      });
    };
      
    return Bill;
  };