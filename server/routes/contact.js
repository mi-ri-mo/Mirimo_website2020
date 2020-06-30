const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('connect');
  res.send({ id: 'connect' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  let email = req.query.email || req.body.email;
  let subject = req.body.subject || req.query.subject;
  let message = req.body.message || req.query.message;

  console.log(email, subject, message);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mirimo01212@gmail.com',
      pass: 'mirimo2020',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOption = {
    from: 'mirimo01212@gmail.com',
    to: 'mirimo01212@gmail.com',
    subject: 'mirimo contact "' + subject + '" from ' + email,
    text: 'message',
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      console.error('Send Mail error : ', err);
      res.redirect('/contact');
    } else {
      console.log('Message sent : ', info);
      res.redirect('/contact');
    }
  });
});

module.exports = router;
