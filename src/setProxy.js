const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/contact', {
      target: 'http://localhost:3002/contact',
    })
  );
};
