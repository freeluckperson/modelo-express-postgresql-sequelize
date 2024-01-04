const { DataTypes } = require("sequelize");
const sequelize = require("../connect");

const User = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre es obligatorio.",
        },
        notEmpty: {
          msg: "El nombre no puede estar vacío.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El correo electrónico es obligatorio.",
        },
        notEmpty: {
          msg: "El correo electrónico no puede estar vacío.",
        },
        isEmail: {
          msg: "El correo electrónico debe ser válido.",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
