const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: process.env.EXPRESS_SESSION_SECRET, saveUninitialized: false, resave: false}));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log('servidor rodando ...'))