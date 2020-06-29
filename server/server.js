'use strict';

var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var contactRouter = require('./routes/contact');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/contact', contactRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

const port = 3002;
app.listen(port, () => {
  console.log('start server on port 3002');
});
