module.exports = (sequelize, Sequelize) => {
    const Food = sequelize.define('food', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true, 
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        price:{
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        tags:{
            type: Sequelize.ARRAY(Sequelize.STRING)
        },
        favorite:{
            type: Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:false
        },
        star:{
            type: Sequelize.REAL,
            allowNull:false,
        },
        imageUrl:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        origin:{
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull:false,
        },
        cookTime:{
            type: Sequelize.STRING,
            allowNull:false,
        },
        createdAt:{
            type:Sequelize.DATE,
        },
        updatedAt:{
            type:Sequelize.DATE,
        }
    });
    //console.log(Food === sequelize.models.Food)
    return Food;
    
}