//create Blog Articles model here
const sequelize = require("../config/connection");

//  make sure to reference the category name and id
//Create users model

// import model and datatypes
const { Model, DataTypes } = require("sequelize");

//create class and extend it to model

class BlogArticles extends Model {}

// initialize the model table or define
BlogArticles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validates: { isNumeric: true },
    },
    article_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_short_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    article_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "BlogArticles",
  }
);

module.exports = BlogArticles;
