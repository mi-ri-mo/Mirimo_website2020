var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var contactRouter = require('./routes/contact');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/contact', contactRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

const port = 3005;
app.listen(port, () => {
  console.log('start server on port ' + port);
});
