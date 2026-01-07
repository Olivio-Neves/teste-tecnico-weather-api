const express = require('express');
const router = express.Router();
const WeatherData = require('../models/WeatherData');
const { getWeather } = require('../api/fetchWeather');

router.post('/fetch/:city', async (req, res) => {
  try {
    const { city } = req.params;
    const data = await getWeather(city);

    if (!data) {
      return res.status(400).json({ error: 'Erro ao buscar dados da API' });
    }

    const weather = await WeatherData.create(data);
    return res.status(201).json(weather);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await WeatherData.findAll({
      order: [['date', 'DESC']]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
