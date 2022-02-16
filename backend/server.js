const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(routes);

// app.get('/', async(req, res) => {
//     try {
//         const { data } = await axios('http://localhost:8889/json')
//         return res.json(data)
//     } catch (err) {
//         console.log(err)
//     }
// })

app.listen('8889');