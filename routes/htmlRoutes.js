const cheerio = require("cheerio");
const axios = require("axios");
const mongoose = require("mongoose");
const Article = require("../models");
const puppeteer = require("puppeteer");


module.exports = function (app) {


  app.get("/", (req, res) => {
    let urlArr = [
      "/assets/images/basketball.jpg", "/assets/images/football.png", "/assets/images/baseball.jpg", "/assets/images/soccer.jpg", "/assets/images/hockey.jpg"
    ];

    let backgroundUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
    let data = {
      image: backgroundUrl,
    };

    res.render("home", data);
  });



  app.get("/saved", (req, res) => {

    let data = {
      results: [],
      image: "/assets/images/baseball.jpg",
    };

    Article.find({})
      .then(function (dbArticle) {
        data.results = dbArticle;
        res.render("saved", data);
      })
      .catch((err) => console.log(err));
  });



  app.get("/basketball", (req, res) => {
    // axios.get("https://sports.yahoo.com/nba/").then((response) => {
    //   let data = {
    //     results: [],
    //     sport: "Basketball",
    //     image: "/assets/images/basketball.jpg"
    //   }

    //   const $ = cheerio.load(response.data);

    //   $("li.js-stream-content ").each((i, element) => {
    //     let resultObj = {
    //       title: $(element).children('div').children("div").children('div:nth-child(2)').children('div').children('a').children('h4').text(),
    //       preview: "",
    //       link: $(element).children('div').children("div").children('div:nth-child(2)').children('div').children('a').attr('href'),
    //       sport: "Basketball",
    //       image: $(element).children('div').children("div").children('div').children('img').attr("src"),
    //       hasBeenRead: false
    //     }
    //     console.log(`Elem=====${$(element).children('div').children()}=====`)
    //     console.log(resultObj)
    //     //check if data exists, create object and then push if no data or error render no results
    //     data.results.push(resultObj)
    //   })
    //   res.render("index", data)
    // })
    //   .catch((err) => console.log(err))


  });


  app.get("/football", (req, res) => {
    axios.get("https://bleacherreport.com/nfl/archives").then((response) => {
      let data = {
        results: [],
        sport: "Football",
        image: "/assets/images/football.png"
      }


      const $ = cheerio.load(response.data);


      $("li.even, li.odd").each((i, element) => {
        data.results.push({

          title: $(element).children("h3").text(),
          preview: $(element).children("p").not(".meta").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "Football",
          hasBeenRead: false

        })
      })
      res.render("index", data);
    }).catch((err) => console.log(err))
  });



  app.get("/baseball", (req, res) => {
    axios.get("https://bleacherreport.com/mlb/archives").then((response) => {
      let data = {
        results: [],
        sport: "Baseball",
        image: "/assets/images/baseball.jpg"
      }


      const $ = cheerio.load(response.data);


      $("li.even, li.odd").each((i, element) => {
        data.results.push({

          title: $(element).children("h3").text(),
          preview: $(element).children("p").not(".meta").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "Baseball",
          hasBeenRead: false

        })
      })
      res.render("index", data);
    })
      .catch((err) => console.log(err))
  });



  app.get("/soccer", (req, res) => {
    axios.get("https://bleacherreport.com/world-football/archives").then((response) => {
      let data = {
        results: [],
        sport: "Soccer",
        image: "/assets/images/soccer.jpg"
      }

      const $ = cheerio.load(response.data);


      $("li.even, li.odd").each((i, element) => {
        data.results.push({

          title: $(element).children("h3").text(),
          preview: $(element).children("p").not(".meta").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "Soccer",
          hasBeenRead: false

        })
      })
      res.render("index", data);
    }).catch((err) => console.log(err))
  });



  app.get("/hockey", (req, res) => {
    axios.get("https://bleacherreport.com/nhl/archives").then((response) => {
      let data = {
        results: [],
        sport: "Hockey",
        image: "/assets/images/hockey.jpg"
      }


      const $ = cheerio.load(response.data);


      $("li.even, li.odd").each((i, element) => {
        data.results.push({

          title: $(element).children("h3").text(),
          preview: $(element).children("p").not(".meta").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "Hockey",
          hasBeenRead: false

        })
      })
      res.render("index", data);
    })
      .catch((err) => console.log(err))
  });
}