import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://data.mongodb-api.com/app/data-czidv/endpoint/data/v1/action/findOne',
    development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

var data = JSON.stringify({
  "collection": "products",
  "database": "twinkleToesProductsDatabase",
  "dataSource": "twinkle-toes-products",
  "projection": {
      "_id": 1
  }
});

var config = {
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': `${process.env.REACT_APP_MONGODB_API_KEY}`,
  },
  data: data
};

console.log(config)

const apiMongoDB = axios.create(config)

export default apiMongoDB