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
  sport: {
    type: String,
  },
  image: {
    type: String,
  },
  hasBeenRead: {
    type: Boolean,
    default: false
  },
  saved: {
    type: Boolean,
    default: false
  },
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
