const express = require('express');
const favicon = require('serve-favicon')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan');
const productsRoutes = require('./routes/products');
const db = require('./db/connection')
const PORT = process.env.PORT || 3000

// const corsOptions ={
//   origin:'http://localhost:3000', //or whatever port your frontend is using
//   credentials:true,            
//   optionSuccessStatus:200
// }

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/api', productsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))