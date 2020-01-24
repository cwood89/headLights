const soccerURL = 'https://sports.yahoo.com/soccer';

const getSoccerData = async function (browser) {

  const soccerPage = await browser.newPage();
  await soccerPage.setViewport({ width: 1366, height: 2500 })
  await soccerPage.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
  await soccerPage.setDefaultTimeout(40000);
  await soccerPage.goto(soccerURL, { waitUntil: 'networkidle2' });
  await soccerPage.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' })
  await soccerPage.waitForSelector('div#Main');

  let soccerResults = await soccerPage.evaluate(() => {
    try {
      const $ = window.$; //otherwise the transpiler will rename it and won't work
      let data = [];
      $("li.js-stream-content:not(:first)").each(async function () {
        let link = await $(this).find('a').attr('href').toString();
        let image = await $(this).find('div').find('img').attr('src');
        let title = await $(this).find('h3').text()
        let preview= await $(this).find('p').text()
        let element = {
          title: title,
          preview: preview,
          link: `https://sports.yahoo.com${ link }`,
          sport: 'Soccer',
          image: image,
          hasBeenRead: false,
          saved: false
        }
        if (!link.startsWith('http')) {
          data.push(element)
          console.log(element)
        }
      });
      return data;
    } catch(err) {
      console.log(err);
    }
  });
  return soccerResults;
}

module.exports = getSoccerData;
