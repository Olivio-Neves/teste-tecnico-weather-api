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

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

module.exports = app;
