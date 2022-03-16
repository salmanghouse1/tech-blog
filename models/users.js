//Create users model

// import model and datatypes
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

//create class and extend it to model

class userData extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// initialize the model table or define
userData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      validates: { isNumeric: true },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
  },
  {
    hooks: {
      async beforeCreate(userData) {
        return bcrypt.hash(userData.password, 10).then((newUserData) => {
          return newUserData;
        });
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = UserData;
