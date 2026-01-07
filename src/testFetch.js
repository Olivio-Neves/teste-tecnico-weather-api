const { getWeather } = require('./api/fetchWeather');

async function test() {
    const data = await getWeather('São Paulo');
    if (data) {
        console.log('API conectada! Dados recebidos:');
        console.log(data);
    } else {
        console.log('Não foi possível conectar à API.');
    }
}

test();
