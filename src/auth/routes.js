'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const {UsersModel} = require('./models/index');
const basicAuth = require('./middleware/basic')
const router = express.Router();

router.post('/signup', async (req, res) => {

    try {
        req.body.password=await bcrypt.hash(req.body.password,7);
        const record=await UsersModel.create({
            username : req.body.username,
            password: req.body.password
        });
        res.status(201).json(record);
    } catch (error) {
        console.log(error);
        res.status(403).send("Error Creating User");
    }
})
 
  router.post('/signin', basicAuth, (req, res) => {
    const user = req.user;
    res.status(200).json(user);
  });
  
  module.exports = router;

  