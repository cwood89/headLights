const puppeteer = require('puppeteer');
const URL = 'https://sports.yahoo.com/nba';

puppeteer.launch({
  headless: false,
}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 })
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')

  await page.goto(URL, { waitUntil: 'networkidle2' });
  await page.waitForSelector('div#Main');
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' })
  let results = await page.evaluate(() => {
    try {
      const $ = window.$; //otherwise the transpiler will rename it and won't work
      let data = [];
      $("li.js-stream-content:not(:first)").each(function () {
        let articleUrl = $(this).find('a').attr('href').toString();
        let element = {
          title: $(this).find('h3').text(),
          preview: $(this).find('p').text(),
          link: `https://sports.yahoo.com${ articleUrl }`,
          sport: 'Basketball',
          image: '',
          hasBeenRead: false
        }
        if (!articleUrl.startsWith('http')) {
          data.push(element)
        }
      });
      return data;
  } catch(err) {
      reject(err.toString());
  }
  });
  await console.log(results)
  await browser.close();
  process.exit();
}).catch(function (error) {
  console.error(error)
  process.exit();
});