import axios from 'axios'

let apiUrl

const apiUrls = {
    production: 'https://twinkle-toes-portfolio.herokuapp.com/api',
    development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.production
} else {
    apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
})

export default api
