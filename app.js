const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')

const users = require('./routes/books');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3474']
}))

app.use('/books', users);

module.exports = app;
