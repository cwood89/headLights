const puppeteer = require('puppeteer');

const getBasketballData = require('./data/basketball');
const getFootballData = require('./data/football');
const getBaseballData = require('./data/baseball');




puppeteer.launch({
  headless: false,
}).then(async browser => {

  let [basketballData, footballData, baseballData] = await Promise.all([getBasketballData(browser), getFootballData(browser), getBaseballData(browser)]);
  
  await console.log(basketballData)
  await console.log(footballData)
  await console.log(baseballData)
  await browser.close();
  process.exit();
}).catch(function (error) {
  console.error(error)
  process.exit();
});