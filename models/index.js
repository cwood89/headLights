const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
  },
  preview: {
    type: String,
  },
  link: {
    type: String,
  },
  hasBeenRead: {
    type: Boolean,
    default: false
  },
  sport: {
    type: String,
  }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
