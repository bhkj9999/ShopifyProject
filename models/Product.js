const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'product_tbl', {
    ProductID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    ProductName: {
        type: Sequelize.STRING
    },
    NumofProductInInventory: {
        type: Sequelize.INTEGER
    }
},
    {
        timestamps: false,
        freezeTableName: true
    },

)