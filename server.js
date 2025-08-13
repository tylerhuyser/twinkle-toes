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

app.use('/api', productsRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// const express = require('express');
// const favicon = require('serve-favicon')
// const path = require('path')
// const cors = require('cors')
// const bodyParser = require('body-parser');
// const logger = require('morgan');
// const productsRoutes = require('./routes/products');
// const db = require('./db/connection') // This should be your mongoose connection
// const PORT = process.env.PORT || 3000

// const app = express();
// app.use(cors())
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// app.use(bodyParser.json())
// app.use(logger('dev'))

// // API routes
// app.use('/api', productsRoutes);

// // Health check route
// app.get('/health', (req, res) => {
//   const mongoose = require('mongoose');
//   const connectionState = mongoose.connection.readyState;
  
//   let status = 'unknown';
//   switch (connectionState) {
//     case 0: status = 'disconnected'; break;
//     case 1: status = 'connected'; break;
//     case 2: status = 'connecting'; break;
//     case 3: status = 'disconnecting'; break;
//   }

//   res.json({
//     status: 'ok',
//     db: status
//   });
// });

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
