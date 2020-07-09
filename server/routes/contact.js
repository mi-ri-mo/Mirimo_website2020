const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('contact : get');
  res.send();
});

router.post('/', (req, res) => {
  console.log('post');
  let email = req.query.email || req.body.email;
  let subject = req.query.subject || req.body.subject;
  let message = req.query.message || req.body.message;

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
    from: email,
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
    } else {
      console.log('Message sent : ', info);
      res.send(
        '<script>alert("Contact Email Send Success"); location.href="/contact"; </script>'
      );
    }
  });
});

module.exports = router;
