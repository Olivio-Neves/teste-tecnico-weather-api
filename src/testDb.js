const sequelize = require('./db');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao PostgreSQL com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();
