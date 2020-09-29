const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");

const PORT = 8000;
const token =
  "AAAAAAAAAAAAAAAAAAAAAIqSIAEAAAAASDyWL8SSoYrb3DVIF9Z9d%2Ff7nvU%3DVQuZWabxo5GFGCaUtuLHYxRLn7SwtoNW4ANckFEgQBtLS3Jzvv";

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
