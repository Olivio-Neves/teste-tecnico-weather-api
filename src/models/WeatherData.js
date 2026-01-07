const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const WeatherData = sequelize.define('WeatherData', {
    city: { type: DataTypes.STRING, allowNull: false },
    temperature: { type: DataTypes.FLOAT, allowNull: false },
    humidity: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = WeatherData;
