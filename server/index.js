import cors from "cors"
import express from "express"
import RSSParser from "rss-parser"

const feedURL = "https://www.di.se/rss"
const parser = new RSSParser();
let articles = [];

const parse = async url => {
  const feed = await parser.parseURL(url);

  feed.items.forEach(item => {
    articles.push({ item })
  })
}
parse(feedURL);

let app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send(articles);
})

const server = app.listen("8000", () => {
  console.log("Listening at http://localhost:8000");
})