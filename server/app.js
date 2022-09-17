const express = require("express");

const { predictCategories } = require("./cohere");
const { cockInit } = require("./db");
const { getMatches } = require("./match");

const app = express();
const port = 3000;

app.get("/applications", async (req, res) => {
  cockInit();
  const related = await getMatches(req.body.age, req.body.industry);
  res.send(related);
});

app.post("/review", async (req, res) => {
  // Get categories from Cohere
  const categories = await predictCategories();

  // Save to db entry for this application
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
