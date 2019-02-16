const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function (app) {
  app.get("/", (req, res) => {

  })

  app.get("/basketball", (req, res) => {
    axios.get("https://bleacherreport.com/nba/archives").then((response) => {

      const $ = cheerio.load(response.data);

      let results = [];

      $("li.even, li.odd").each((i, element) => {
        results.push({
          title: $(element).children("h3").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "basketball",
          hasBeenRead: false
        });
      });
      console.log(results);
      return res.json(results);

    }).catch((err) => console.log(err))
  });

  app.get("/football", (req, res) => {
    axios.get("https://bleacherreport.com/nfl/archives").then((response) => {

      const $ = cheerio.load(response.data);

      let results = [];

      $("li.even, li.odd").each((i, element) => {
        results.push({
          title: $(element).children("h3").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "football",
          hasBeenRead: false
        });
      });
      console.log(results);
      return res.json(results);
    }).catch((err) => console.log(err))
  });

  app.get("/baseball", (req, res) => {
    axios.get("https://bleacherreport.com/mlb/archives").then((response) => {

      const $ = cheerio.load(response.data);

      let results = [];

      $("li.even, li.odd").each((i, element) => {
        results.push({
          title: $(element).children("h3").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "baseball",
          hasBeenRead: false
        });
      });
      console.log(results);
      return res.json(results);
    }).catch((err) => console.log(err))
  });

  app.get("/soccer", (req, res) => {
    axios.get("https://bleacherreport.com/world-football/archives").then((response) => {

      const $ = cheerio.load(response.data);

      let results = [];

      $("li.even, li.odd").each((i, element) => {
        results.push({
          title: $(element).children("h3").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "soccer",
          hasBeenRead: false
        });
      });
      console.log(results);
      return res.json(results);
    }).catch((err) => console.log(err))
  });

  app.get("/hockey", (req, res) => {
    axios.get("https://bleacherreport.com/nhl/archives").then((response) => {

      const $ = cheerio.load(response.data);

      let results = [];

      $("li.even, li.odd").each((i, element) => {
        results.push({
          title: $(element).children("h3").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "hockey",
          hasBeenRead: false
        });
      });
      console.log(results);
      return res.json(results);
    }).catch((err) => console.log(err))
  });
}