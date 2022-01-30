//create Blog Articles model here


//  make sure to reference the category name and id
//Create users model

// import model and datatypes
const { Model, DataTypes } = require('sequelize');


//create class and extend it to model

class BlogArticles extends Model {}

// initialize the model table or define
BlogArticles.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validates: { isNumeric: true }
    },
    article_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aricle_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aricle_short_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aricle_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    article_date: {
        type: DataTypes.String,
        allowNull: false
    }
})

exports.module = BlogArticles;