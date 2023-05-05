module.exports = (sequelize, Sequelize) => {
    const TypeProduct = sequelize.define("TypeProducts", {
        ID: {
        type: Sequelize.INTEGER
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
    },{
        associate: function (models) {
            TypeProduct.hasMany(
                models.Product,
                { through: 'ID' }
            );
            
        }
    });
  
    return TypeProduct;
  };