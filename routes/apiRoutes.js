const mongoose = require("mongoose");
const Article = require("../models");

module.exports = function (app) {

  app.post("/api/articles/:id", (req, res) => {
    Article.updateOne({ _id: req.params.id }, { $set: { saved: true }})
      .then(data => {
        res.send({
          success: true
        })
        console.log(data);
        console.log("saved");
      })
  });


  app.delete("/api/articles/:id", (req, res) => {
    Article.deleteOne({ _id: req.params.id })
      .then(data => {
        res.json(data);
      }).catch(function (err, data) {
        res.json(err);
      });
  })

}