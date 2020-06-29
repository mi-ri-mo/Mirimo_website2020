const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  console.log({ id: 'get' });
  res.send({ id: 'get' });
});

router.post('/', (req, res) => {
  let email = req.body.email || req.query.email;
  let subject = req.body.subject || req.query.subject;
  let message = req.body.message || req.query.message;

  console.log(email, subject, message);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mirimo01212@gmail.com',
      pass: 'mirimo2020',
    },
  });

  var mailOption = {
    from: 'ghddnjf2901@gmail.com',
    to: 'mirimo01212@gmail.com',
    subject: 'nodemailer test',
    text: 'Hello',
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      console.error('Send Mail error : ', err);
      res.redirect('/');
    } else {
      console.log('Message sent : ', info);
      res.redirect('/');
    }
  });
});

module.exports = router;
