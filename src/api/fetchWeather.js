const axios = require('axios');
require('dotenv').config();

async function getWeather(city) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        return {
            city: response.data.name,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date()
        };
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
        return null;
    }
}

module.exports = { getWeather };
