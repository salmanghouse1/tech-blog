//Create users model

// import model and datatypes
const { Model, DataTypes } = require('sequelize');


//create class and extend it to model

class Users extends Model {}

// initialize the model table or define
Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validates: { isNumeric: true }
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
    }
})

module.exports = Users;