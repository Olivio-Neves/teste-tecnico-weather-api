const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const weatherRoutes = require('./routes/weatherRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/weather', weatherRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on 0.0.0.0:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
