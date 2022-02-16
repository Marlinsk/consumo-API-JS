const data = require('./models/Users');
const express = require('express');
const routes =  express.Router();

routes.get('/json', data.index);

module.exports = routes;