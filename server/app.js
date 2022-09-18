const express = require("express");

const { predictCategories } = require("./cohere");
const { cockInit } = require("./db");
const { getMatches } = require("./match");

const app = express();
const port = process.env.PORT || 3000;

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
app.post("/signup", async (req, res) => {
  // Get categories from Cohere
  if (req){
  const {id} = Math.random();
  const {firstName} = req.body.formData;
  const {lastName} = req.body.formData;
  const {age} = req.body.formData;
  const {industry} = req.body.formData;
    //
    await client.query("BEGIN;");
  const result = await client.query(`INSERT INTO tester (id,first_name,last_name,age,occupation) VALUES (${id},${firstName},${lastName},${age},${industry});`);
  await client.query("COMMIT;");
    res.sendStatus(200)


  }else{
    res.sendStatus(500)
  }

  // Save to db entry for this application
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});


