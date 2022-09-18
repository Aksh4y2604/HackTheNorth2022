const express = require("express");

const { predictCategories } = require("./cohere");
const {
  cockInit,
  getApplicationOnDashboard,
  getApplications,
  getReviewsOnDashboard,
  populateReviewTable,
  incrementIssue,
} = require("./db");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const initEndpoints = (client) => {
  app.get("/application", async (req, res) => {
    if (!req.query || !req.query.applicantId) return res.sendStatus(400);

    await getApplicationOnDashboard(
      client,
      (err, application) => {
        res.send(application.rows[0]);
      },
      req.query.applicantId
    );
  });

  app.get("/applications", async (req, res) => {
    if (!req.query || !req.query.testerId) return res.sendStatus(400);

    await getApplications(
      client,
      (err, related) => {
        res.send(related.rows);
      },
      req.query.testerId
    );
  });

  app.post("/review", async (req, res) => {
    // Validation
    if (
      !req.body ||
      !req.body.applicantId ||
      !req.body.feedback ||
      !req.body.stars ||
      !req.body.firstName ||
      !req.body.lastName
    )
      return res.sendStatus(400);

    // Get categories from Cohere
    const classification = await predictCategories(req.body.feedback);
    await incrementIssue(
      client,
      () => {},
      req.body.applicantId,
      classification[0].prediction
    );

    // Save reviews to review table
    await populateReviewTable(
      client,
      () => {},
      req.body.applicantId,
      req.body.feedback,
      req.body.stars,
      req.body.firstName,
      req.body.lastName
    );

    res.sendStatus(200);
  });

  app.get("/reviews", async (req, res) => {
    if (!req.query || !req.query.applicantId) return res.sendStatus(400);

    await getReviewsOnDashboard(
      client,
      (err, reviews) => {
        let avgRating = 0;
        if (reviews.rows) {
          reviews.rows.forEach((review) => {
            avgRating += parseInt(review.stars);
          });
          avgRating /= reviews.rows.length;
        }
        res.send({
          averageRating: avgRating,
          reviews: reviews.rows,
        });
      },
      req.query.applicantId
    );
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening on port ${port}`);
  });
};

cockInit(initEndpoints);
