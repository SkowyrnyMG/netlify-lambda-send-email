const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport( {
  service: 'gmail',
  auth: {
      user: process.env.REACT_SMTP_EMAIL,
      pass: process.env.REACT_EMAIL_PASSWORD
  }
});

exports.handler = function (event, context, callback) {
      const { dest } = JSON.parse(event.body);

      const mailOptions = {
        from: process.env.REACT_SMTP_EMAIL,
        to: dest,
        subject: 'Your title!',
        html: `<p style="font-size: 16px;">Your text message.</p>`
    };

       transporter.sendMail(mailOptions,
        (erro, info) => {
          if(erro){
          callback(error);
          }
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              data: 'Message send!'
            })
          })
      });
}