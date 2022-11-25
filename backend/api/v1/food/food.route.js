const $foodController = require('./food.controller');

exports.foodRoutes = function(app){
    app.post('/api/create_food', $foodController.foodController.createFood);
    app.get('/api/food/:id', $foodController.foodController.findById);
    app.get('/api/search/:name', $foodController.foodController.findBySearchTerm);
    app.get('/api/All_foods', $foodController.foodController.getAllFoods);
}