const getBasketballData = require('./basketball');
const getFootballData = require('./football');
const getBaseballData = require('./baseball');
const getSoccerData = require('./soccer');
const getHockeyData = require('./hockey');
const Article = require("../models");

module.exports = async function (browser) {
    let data = [];
      
    let [basketballData, footballData, baseballData, soccerData, hockeyData] = await Promise.all([getBasketballData(browser), getFootballData(browser), getBaseballData(browser), getSoccerData(browser), getHockeyData(browser)]);
      
    data = await data.concat(basketballData, footballData, baseballData, soccerData, hockeyData);
    await browser.close();
  
    await Article.find({})
      .then((articles) => {
        let filteredData = data.filter(function (item) {
          for (var i = 0, len = articles.length; i < len; i++) {
            if (articles[i].title == item.title) {
              return false;
            }
          }
          return true
        });
        console.log('========= All: ' + data.length + ' Filtered: ' + filteredData.length)
        if (filteredData.length > 0) {
          Article.collection.insertMany(filteredData)
            .then((data) => {
              console.log(data);
              console.log('Articles Saved!');
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }