const { Router } = require('express')
const controllers = require('../controllers/products')

const router = Router()

app.get('/health', (req, res) => res.json({ status: 'ok' }));
router.get('/products', controllers.getProducts) // these are routes this is their purpose. I have spoken. This is abstraction
router.get('/products/:id', controllers.getProduct)
router.post('/products', controllers.createProduct)
router.put('/products/:id', controllers.updateProduct)
router.delete('/products/:id', controllers.deleteProduct)

module.exports = router
