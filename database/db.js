const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: 'localhost',
    storage: 'database/database.sqlite',
    define: {
        freezeTableName: true,
        timestamps: false
    },
    logging: false
});

module.exports = sequelize;