import axios from 'axios'

var data = JSON.stringify({
  "collection": "products",
  "database": "twinkleToesProductsDatabase",
  "dataSource": "twinkle-toes-products",
  "projection": {
      "_id": 1
  }
});

var config = {
  url: 'https://data.mongodb-api.com/app/data-czidv/endpoint/data/v1/action/findOne',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': `${process.env.REACT_APP_MONGODB_API_KEY}`,
  },
  data: data
};

console.log(config)

const api = axios.create(config)

export default api