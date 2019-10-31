const Sequelize = require('sequelize');
const db ={};
const sequelize = new Sequelize('TextDB', 'user1', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
    // port: 3306,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;



// import mysql from 'mysql';
// import {} from "dotenv/config"

// const config = {
//         host: "localhost",
//         user: "user1",
//         password: "12345678",
//         database: "TextDB"
// };

// const connection = mysql.createConnection(config);

// export default connection;

// // const mysql = require('mysql');

// // module.exports = function (app){
// //     app.get('/', function(req, res){
// //         connection.query('select * from product_tbl', function(err, data){
// //             (err)? res.send(err):res.json(product_tbl: data)}
// //         });
// //     })
// // };


// // // var mysql = require('mysql');

// // // const connection = mysql.createConnection({
// // //     host: "localhost",
// // //     user: "user1",
// // //     password: "12345678",
// // //     database: "TextDB"
// // // });

// // // connection.connect(function (err) {
// // //     if(err) throw err;
// // //  return console.log("Connected!");
// // // });

// // // connection.query("Select * from Product_tbl",function(err,result,fields){
// // //     if(err) throw err;
// // //     console.log(result);
// // // });