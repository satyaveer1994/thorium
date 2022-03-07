const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const moment = require("moment");
const { default: mongoose } = require("mongoose");
const requestIp = require("request-Ip");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestIp.mw({ attributeName: "customIp" }));

app.use(function (req, res, next) {
  let date = new Date();
  let ip = req.customIp;
  let url = req.url;
  console.log(date, ip, url);
  next();
});

mongoose
  .connect(
    "mongodb+srv://Satyaveer1994:Satyaveer123@cluster0.pn1nk.mongodb.net/satyaveer-DB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("I am Ready"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
