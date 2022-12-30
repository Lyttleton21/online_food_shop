const $userController = require('./user.contoller');

exports.userRoutes = function(app){
    app.post('/api/users/login', $userController.userController.login);
}