'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {UsersModel} = require('../models/index');

//FOR "/signin" SIGNING IN EXPORTED TO ROUTES//
module.exports = async(req, res, next) => {
    if (req.headers["authorization"]) {
        let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
        let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
        let decodedString = base64.decode(encodedString); // "username:password"
        let [username, password] = decodedString.split(':'); // username, password
    
    try {

        const user = await  UsersModel.findOne({where: { username: username }})
        if (!user || !password) {
            res.status(403).json('Invalid UserName / password');
            return;
          }
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            req.user = user;
            next();
            } 
       
    else {
      
            throw new Error('Invalid UserName')
        }
    } catch (error) {
        console.log(error);
     
      res.status(403).send("Error Occured"); 
      }
    }}