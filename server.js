const express = require('express');
const favicon = require('serve-favicon')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const productsRoutes = require('./routes/products');
const db = require('./db/connection')
const PORT = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use('/api', productsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => {
  console.log('MongoDB connected successfully!');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
