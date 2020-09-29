const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");

require("dotenv").config();
const { BEARER_TOKEN } = process.env;

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/trump", (req, res) => {
  fetch("https://api.twitter.com/2/tweets/search/recent?query=from:25073877", {
    method: "GET",
    headers: {
      authorization: `Bearer ${BEARER_TOKEN}`,
    },
  })
    .then((data) => data.json())
    .then((json) =>
      res.status(200).json({ status: "success", data: json.data })
    )
    .catch((err) => res.status(400).json({ status: "error", message: err }));
});

app.get("/hillary", (req, res) => {
  fetch(
    "https://api.twitter.com/2/tweets/search/recent?query=from:1339835893",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  )
    .then((data) => data.json())
    .then((json) =>
      res.status(200).json({ status: "success", data: json.data })
    )
    .catch((err) => res.status(400).json({ status: "error", message: err }));
});
