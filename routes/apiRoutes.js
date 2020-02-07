const mongoose = require("mongoose");
const Article = require("../models");

module.exports = function (app) {

  app.post("/api/articles/:id", (req, res) => {
    Article.updateOne({ _id: req.params.id }, { $set: { saved: true }})
      .then(data => {
        res.send({
          success: true
        })
      })
  });


  app.delete("/api/articles/:id", (req, res) => {
    Article.updateOne({ _id: req.params.id }, { $set: { saved: false }})
    .then(data => {
      res.send({
        success: true
      })
    })
  })

}