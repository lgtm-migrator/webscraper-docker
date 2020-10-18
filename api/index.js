const request = require("request-promise");
const express = require("express");
const app = express();
const cheerio = require("cheerio");
const PORT = 8080;

// HACKERSNEWS

// get all links from HACKERNEWS
function getHackersNews() {
  request.get(`https://thehackernews.com/`, function (error, response, data) {
    let $ = cheerio.load(data);
    let linksArray = [];
    $(".story-link").each(function (i, elem) {
      linksArray[i] = {
        link: $(this).attr("href"),
      };
    });
    return getHackersNewsApi(linksArray);
  });
}
// get one link and push data in array
function getHackersNewsApi(linksArray) {
  let DatasArray = [];
  linksArray.forEach((el,index) => {
    request.get(linksArray[index].link, function (error, response, data) {
      let $ = cheerio.load(data);
      DatasArray.push({'story-title':$("h1").text(), 'p':$("p").text()})
      console.log(DatasArray, 'DatasArray')
   });
  });
}
return getHackersNews();

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
