const Sequelize = require('sequelize');

const sequelize = new Sequelize('rentcar', 'postgres', '@Ps007', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize;