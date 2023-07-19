const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const User = sequelize.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone_no: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

module.exports=User;