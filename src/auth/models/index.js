"use strict";

require("dotenv");

const UsersModel = require('./users-model');

//Connect to the database
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    UsersModel:UsersModel(sequelize, DataTypes),
    
  }