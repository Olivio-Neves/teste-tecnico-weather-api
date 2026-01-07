const sequelize = require('./db');
const WeatherData = require('./models/WeatherData');
const { getWeather } = require('./api/fetchWeather');

async function run() {
  try {
    await sequelize.sync();

    const data = await getWeather('São Paulo');

    if (!data) {
      console.log('Erro ao buscar dados da API');
      return;
    }

    const saved = await WeatherData.create(data);
    console.log('✅ Dados salvos no banco:');
    console.log(saved.toJSON());

  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await sequelize.close();
  }
}

run();
