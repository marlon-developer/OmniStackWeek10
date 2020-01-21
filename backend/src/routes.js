const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Method HTTP: GET, POST, PUT, DELETE

// PARAMS TYPES

// Query Params: req.query (Filters, Order, Pagination, ...)
// Route Params: req.params (Identify Resource on change or remove)
// Body: req.body (Data for creating or edit a record)


routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes