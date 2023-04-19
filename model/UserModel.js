module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
        ID: {
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      RoleID: {
        type: Sequelize.INTEGER
      }
    });
  
    return User;
  };