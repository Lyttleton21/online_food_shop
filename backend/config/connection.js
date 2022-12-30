const env = require('./env');
const Sequelize = require('sequelize');
const cli = require('cli-color');


const sequelize = new Sequelize(env.db_name, env.db_username, env.db_password,{
    host: env.db_host,
    port: env.db_port,
    dialect: env.db_dialect,
    operatorsAliases: false,
    define:{
        charset: 'utf8',
        collate: 'utf8_general_cl',
        timestamps:true
    },
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

// const sequelize = new Sequelize(process.env.db_name, process.env.db_username, process.env.db_password, {
//     host: process.env.db_host,
//     port: process.env.db_port,
//     dialect: "postgres",
//     operatorsAliases: false,
//     define:{
//         charset: 'utf8',
//         collate: 'utf8_general_cl',
//         timestamps:true
//     },
//     pool: {
//         max:5,
//         min:0,
//         acquire:30000,
//         idle:10000
//     }
// });

try{
    sequelize.authenticate();
    console.log(cli.greenBright('Database connection is successful'));
}catch(error){
    console.log(cli.bgRed('Database connection failed!'));
}


module.exports = sequelize;