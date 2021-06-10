const Express = require("express");
const App = Express();
const Logger = require("morgan");
const BodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require('dotenv').config();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));
App.use(Logger("dev"));

//This is to make sure in development and production mode communication btw back and front end will be allowed
const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  "http://localhost:80",
  "ebrahim-ghanbari.ca",
  "http://www.ebrahim-ghanbari.ca"
];
const corsOptions = {
  origin: function (origin, callback) {
    // console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // console.log("Origin acceptable");
      callback(null, true);
    } else {
      // console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
App.use(cors(corsOptions));

App.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

App.get("/contact", (req, res) => {
  res.json({
    message: "Seems to work yay!",
  });
});

App.post("/contact", async (req, res) => {
  const email = req.body;
  const plainTextMsg = `
  Name: ${email.name} ** 
  Email: ${email.email} ** 
  Content: ${email.message}`;
  const htmlTextMsg = `
  <h3> Name: </h3> <p> ${email.name} </p>
  <h3> Email: </h3> <p> ${email.email} </p>
  <h3> Content: </h3> <p> ${email.message} </p>`;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  const msg = {
    from: 'pet.ghanbari@gmail.com', // sender address
    to: "pet.ghanbari@gmail.com", // list of receivers
    subject: "Rquest for info - Website",
    text: plainTextMsg,
    html: htmlTextMsg,
  };

  let info = await transporter.sendMail(msg);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.send("Email sent!");
});


if (process.env.NODE_ENV === "production") {
  App.use(Express.static(path.join(__dirname, "client/build")));
}


const PORT = process.env.PORT || 80;
App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
