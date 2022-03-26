const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3000, () => console.log('servidor rodando ...'))