const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection');
const User = require('../models/user.model')(sequelize, Sequelize);
const { Op } = require("sequelize");
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');

User.sync();

const generateTokenResponse = (user) => {
    const token = jwt.sign({
        email:req.body.email, isAdmin:req.body.isAdmin
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

exports.userController = {

    login: asyncHandler(
        async (req, res) => {
            const user = await User.findOne({
                where: {
                    email:req.body.email
                }
            });
            if(user){

                const user = {email : req.body.email}
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'30s'})
                //checking if the password is valid
                if(user.password != req.body.password){
                    //console.log(req.body.password);
                    res.send("The password you enter in incorrect!!! try again")
                }else{
                    res.status(200)
                    .send(accessToken);
                   //console.log({accessToken});
                }
                // checking if the email is not valid!!!!
            }else
            if(!user){
                res.status(400)
                .send({message:"The Email you enter is not valid!!!", error:true});
            }
        }
    )

}