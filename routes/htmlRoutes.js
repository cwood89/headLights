const mongoose = require("mongoose");
const Article = require("../models");


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

    Article.find({ saved: true })
      .then(function (articles) {
        data.results = articles;
        res.render("saved", data);
      })
      .catch((err) => console.log(err));
  });



  app.get("/basketball", (req, res) => {
    
    let data = {
      results: [],
      sport: "Basketball",
      image: "/assets/images/basketball.jpg"
    }

    Article.find({ sport: 'Basketball' })
      .then(function (articles) {
        data.results = articles;
        res.render('index', data);
      })
      .catch((err) => console.log(err));
  });


  app.get("/football", (req, res) => {
    let data = {
      results: [],
      sport: "Football",
      image: "/assets/images/football.png"
    }

    Article.find({ sport: 'Football' })
      .then(function (articles) {
        data.results = articles;
        res.render('index', data);
      })
      .catch((err) => console.log(err));
  });



  app.get("/baseball", (req, res) => {
    let data = {
      results: [],
      sport: "Baseball",
      image: "/assets/images/baseball.jpg"
    }

    Article.find({ sport: 'Baseball' })
      .then(function (articles) {
        data.results = articles;
        res.render('index', data);
      })
      .catch((err) => console.log(err));
  });



  app.get("/soccer", (req, res) => {
    let data = {
      results: [],
      sport: "Soccer",
      image: "/assets/images/soccer.jpg"
    }
    
    Article.find({ sport: 'Soccer' })
      .then(function (articles) {
        data.results = articles;
        res.render('index', data);
      })
      .catch((err) => console.log(err));
  });



  app.get("/hockey", (req, res) => {
    let data = {
      results: [],
      sport: "Hockey",
      image: "/assets/images/hockey.jpg"
    }
    Article.find({ sport: 'Hockey' })
      .then(function (articles) {
        data.results = articles;
        res.render('index', data);
      })
      .catch((err) => console.log(err));
  });
}