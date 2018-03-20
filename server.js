const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.load();

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "./views");

app.set("view engine", "ejs");

app.use("/css", express.static(__dirname + "/css"));

app.use("/img", express.static(__dirname + "/img"));

app.use("/js", express.static(__dirname + "/js"));

const sendGridApiKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridApiKey);
console.log(sendGridApiKey);

const topNavigation = {
  home: {
    title: "Home",
    url: "/"
  },
  work: {
    title: "Work",
    url: "/work"
  },
  about: {
    title: "About",
    url: "/about"
  },
  contact: {
    title: "Contact",
    url: "/contact"
  }
};

app.get("/", (req, res) => {
  const data = {
    navigation: topNavigation
  };

  res.render("index", data);
});

app.get("/about", (req, res) => {
  const data = {
    navigation: topNavigation
  };

  res.render("about", data);
});

app.get("/work", (req, res) => {
  const data = {
    navigation: topNavigation
  };

  res.render("work", data);
});

app.get("/contact", (req, res) => {
  const data = {
    navigation: topNavigation
  };

  res.render("contact", data);
});

app.post("/thanks", (req, res) => {
  const data = {
    navigation: topNavigation,
    contact: req.body
  };

  const msg = {
    to: "garethbk@gmail.com",
    from: req.body.email,
    subject: "New inquiry from " + req.body.firstName + " " + req.body.lastName,
    text: req.body.message
  };
  console.log(sendGridApiKey);
  sgMail.send(msg);

  res.render("thanks", data);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening at http://localhost:8080...");
});
