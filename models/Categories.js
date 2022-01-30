//Create users model

// import model and datatypes
const { Model, DataTypes } = require('sequelize');


//create class and extend it to model

class Categories extends Model {}

// initialize the model table or define
Categories.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validates: { isNumeric: true }
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})