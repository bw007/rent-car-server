const Sequelize = require('sequelize');

const sequelize = new Sequelize('rentcar', 'postgres', '@Ps007', {
  host: 'localhost',
  dialect: 'postgres'
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.car = require('./car.model')(sequelize, Sequelize)

module.exports = db;