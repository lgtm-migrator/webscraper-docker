const request = require("request-promise");
const express = require("express");
const app = express();
const cheerio = require("cheerio");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.post("/api/urls", (req, res) => {
  let datasArray = [];
  let url = "";
    for (let i = 0; i < 4; i++) {
    url = req.body.urls[i].url;
    // get all links
    function getHackersNews(url) {
      request.get(url, function (error, response, data) {
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
    // push data in array to create a json and return
    function getHackersNewsApi(linksArray) {
      linksArray.forEach((el, index) => {
        request.get(linksArray[index].link, function (error, response, data) {
          let $ = cheerio.load(data);
          datasArray.push({ title: $("h1").text(), text: $("p").text() });
          if (datasArray.length === linksArray.length) {
            res.status(200).send(datasArray);
          }
        });
      });
    }
    if (url !== "") {
      getHackersNews(url);
    }
  }
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
