module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true, 
            primaryKey: true,
        },
        email:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        name:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        address:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        isAdmin:{
            type: Sequelize.BOOLEAN,
            defaultValue:false
        },
        createdAt:{
            type:Sequelize.DATE,
        },
        updatedAt:{
            type:Sequelize.DATE,
        }
    });
    return User;
}