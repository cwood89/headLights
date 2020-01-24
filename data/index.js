const getBasketballData = require('./basketball');
const getFootballData = require('./football');
const getBaseballData = require('./baseball');
const getSoccerData = require('./soccer');
const getHockeyData = require('./hockey');

module.exports = {
  basketball: getBasketballData,
  football: getFootballData,
  baseball: getBaseballData,
  soccer: getSoccerData,
  hockey: getHockeyData
}