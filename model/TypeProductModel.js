module.exports = (sequelize, Sequelize) => {
    const TypeProduct = sequelize.define("TypeProducts", {
        ID: {
        type: Sequelize.INTEGER
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
    },{
       
    });
    TypeProduct.associate = (Models) => {
      TypeProduct.hasMany(Models.Product, {
        foreignKey: 'TypeProductID',
        sourceKey: 'ID',
      });
    };
      
    return TypeProduct;
  };