const Sequelize = require('sequelize');
const sequelize = require('../../../config/connection');
const Food = require('../models/food.model')(sequelize, Sequelize);
const { Op } = require("sequelize");
const asyncHandler = require('express-async-handler');


Food.sync();

exports.foodController = {

    createFood:
    asyncHandler(
        async (req, res) => {
            const data = {
                name:req.body.name,
                price:req.body.price,
                tags:req.body.tags,
                favorite:req.body.favorite,
                star:req.body.star,
                imageUrl:req.body.imageUrl,
                cookTime:req.body.cookTime,
                origin:req.body.origin
            }
            const foods = await Food.create(data);
            if(!foods instanceof Food){
                //if false
                res.send({
                    error:true,
                    message:'Food is unable to create!!!'
                });
            }else{
                res.status(200)
                .send({
                    error:false,
                    message:'Food Created successfully' 
                });
            }
        }
    ),

    findById: asyncHandler(
        async (req, res) => {
            const data = req.params.id;
            const find = await Food.findByPk(data);
            if(find === null){
                res.send({
                    error:true,
                    message:'Unable to find the id you enter!!!'
                });
            }else{
                res.status(200)
                .send(find);
            }
        }
    ),

    findBySearchTerm: asyncHandler(
        async (req, res) => {
            const data = req.params.name;
            const search = await Food.findAll({ 
                where: {
                    name:data
                } 
            });
            if(search === null){
                res.status(404)
                send({
                    error:true,
                    message:'Unable to find the search you enter!!!'
                });
            }else{
                res.status(200)
                .send(search);
            }
        }
    ),

    getAllFoods:asyncHandler(
        async (req, res) => {
            const allFood = await Food.findAll();
            if(allFood === null){
                res.status(404)
                send({
                    error:true,
                    message:'Unable to find foods!!!'
                });
            }else{
                res.status(200)
                .send(allFood);
            }
        }
    ),

    getAllTags:asyncHandler(
        async (req, res) => {
            const { count, rows }  = await Food.findAndCountAll({
                where: {
                    [Op.and]: [
                      { tags: ['fastfood'] }
                    ]
                  }
            });
            console.log("ROWS:::",rows);
            console.log("COUNT:::",count)
        }
        // async (req, res) => {
        //     const tag = await Food.aggregate([
        //         {
        //             $unwind:'$tags'
        //         }
        //     ])
        //     console.log(tag);
        // }
    )

}