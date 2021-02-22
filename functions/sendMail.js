const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'lambdatestmat@gmail.com',
      pass: 'Testtest12#'
  }
});

exports.handler = function (event, context, callback) {

functions.https.onRequest((req, res) => {
  cors(req, res, () => {

      // getting dest email by query string
      const dest = req.query.dest;

      const mailOptions = {
          from: 'Your Account Name Mateusz!', // Something like: Jane Doe <janedoe@gmail.com>
          to: dest,
          subject: 'I AM AWESOME!!!', // email subject
          html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
              <br />
              <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
          ` // email content in HTML
      };

      // returning result
      return transporter.sendMail(mailOptions, (erro, info) => {
          if(erro){
              return res.send(erro.toString());
          }
          return res.send('Sended');
      });
  });
});

}