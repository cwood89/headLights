const mongoose = require("mongoose");
const Article = require("../models");

module.exports = function (app) {

  app.post("/api/articles", (req, res) => {
    data = {
      title: req.body.title,
      preview: req.body.preview,
      link: req.body.link,
      sport: req.body.sport,
      hasBeenRead: req.body.hasBeenRead
    };
    console.log(data);
    Article.create(data)
      .then((dbArticle) => {
        console.log(dbArticle);
        res.json(dbArticle)
      })
      .catch((err) => {
        console.log(err);
      });
  })

}