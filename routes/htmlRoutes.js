const cheerio = require("cheerio");
const axios = require("axios");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index")
  });

  app.get("/basketball", (req, res) => {
    axios.get("https://bleacherreport.com/nba/archives").then((response) => {
      let data = {
        results: [],
        sport: "Basketball",
        image: "/assets/images/basketball.jpg"
      }


      const $ = cheerio.load(response.data);


      $("li.even, li.odd").each((i, element) => {
        data.results.push({

          title: $(element).children("h3").text(),
          preview: $(element).children("p").not(".meta").text(),
          link: "https://bleacherreport.com" + $(element).children("h3").children("a").attr("href"),
          sport: "Basketball",
          hasBeenRead: false

        })
        console.log(data.results);
      })
      res.render("index", data);
    })
      .catch((err) => console.log(err))
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
        console.log(data.results);
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
        console.log(data.results);
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
        console.log(data.results);
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
        console.log(data.results);
      })
      res.render("index", data);
    })
      .catch((err) => console.log(err))
  });
}