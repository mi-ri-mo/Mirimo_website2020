const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('contact : get');
  res.send({ connect: true });
});

router.post('/send', (req, res, next) => {
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
    subject: 'mirimo contact "' + subject + '"',
    text: 'From ' + email + '\n\n' + message,
  };

  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      console.error('Send Mail error : ', err);
      res.send(
        '<script>alert("Contact Email Send Failed"); location.href="/contact"; </script>'
      );
      next();
    } else {
      console.log('Message sent : ', info);
      res.send(
        '<script>alert("Contact Email Send Success"); location.href="/contact"; </script>'
      );
      next();
    }
  });
});

module.exports = router;
