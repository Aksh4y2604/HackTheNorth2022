const express = require("express");

const { predictCategories } = require("./cohere");
const { cockInit, getApplications, incrementIssue } = require("./db");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const initEndpoints = (client) => {
  app.get("/applications", async (req, res) => {
    if (!req.params || !req.params.testerId)
      return res.sendStatus(400);
    await getApplications(
      client,
      (err, related) => {

        res.send(related.rows);
      },
      req.params.testerId
    );
  });

  app.post("/review", async (req, res) => {
    // Get categories from Cohere
    const classification = await predictCategories(req.body.review);
    incrementIssue(client, () => {}, 3, classification[0].prediction);

    res.sendStatus(200);
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`);
  });
};

cockInit(initEndpoints);
