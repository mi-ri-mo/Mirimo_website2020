var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var contact = require('./routes/contact');

var app = express();

const port = 3002;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/contact', contact);

app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log('start server on port 3002');
});
