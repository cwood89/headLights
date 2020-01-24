
//Need to prevent duplicate articles from saving.
//If new articles are added update sport page.

const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const puppeteer = require('puppeteer');
const Data = require('./data');
const Article = require("./models");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapedb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
var db = mongoose.connection;

db.once("connected", function () {
  console.log("Mongoose connection successful.");
});

db.on("error", function (error) {
  console.log("DB Connection Error", error);
})

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("Server started. Go to localhost:" + PORT);

  puppeteer.launch({
    headless: true,
  }).then(async browser => {
    let data = [];
    
    let [basketballData, footballData, baseballData, soccerData, hockeyData] = await Promise.all([Data.basketball(browser), Data.football(browser), Data.baseball(browser), Data.soccer(browser), Data.hockey(browser)]);

    data = await data.concat(basketballData, footballData, baseballData, soccerData, hockeyData)
    
    Article.collection.insertMany(data)
      .then((data) => {
        console.log('Articles Saved!');
      })
      .catch((err) => {
        console.log(err);
      });
    
    await browser.close();

  }).catch(function (error) {

    console.error(error);
    process.exit();

  });
})