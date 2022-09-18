const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");

// Run the transactions in the connection pool
exports.cockInit = async (callback) => {
(async () => {
  //const connectionString = process.env.DATABASE_URL;
  const connectionString = "postgresql://adrian:iUWxuR7R3qCK_RONTQQVqQ@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dclawed-hisser-4927";
  const pool = new Pool({
    connectionString,
    application_name: "$ docs_simplecrud_node-postgres",
  });

  // Connect to database
  const client = await pool.connect();

  function cb(err, res) {
    if (err) throw err;

    if (res.rows.length > 0) {
      res.rows.forEach((row) => {
        console.log(row);
      });
    }
  }

  callback(client);

  // Exit program
  //process.exit();
})().catch((err) => console.log(err.stack));}

// get applications, search by age and demographics
// age can be null where you don't search for it
async function getMatchedApplications(client, callback, testerId) {
  await client.query("BEGIN;");
  const query = `SELECT company_name, product_desc, title, pay, img_url, issue_count_speed, issue_count_design, issue_count_accessibility, issue_count_usability from applicant WHERE target_min_age <= (SELECT age from tester WHERE id = ${testerId}) AND (SELECT age from tester WHERE id = ${testerId}) <= CAST(target_max_age as INT) AND (target_occupation = (SELECT occupation from tester where id = ${testerId}));`;
  await client.query(query, callback);
  await client.query("COMMIT;");
}
exports.getApplications = getMatchedApplications;

async function incrementIssue(client, callback, applicationId, issueName) {
  await client.query("BEGIN;");
  const columnName = 'issue_count_' + issueName.toLowerCase();
  const query = "UPDATE applicant SET " + columnName + " = " + columnName + " + 1 WHERE id = " + applicationId + ";";
  await client.query(query, callback);
  await client.query("COMMIT;");
}

exports.incrementIssue = incrementIssue;

async function populateReviewTable (client, callback, applicationId,feedback, rating,firstName, lastName){
  await client.query("BEGIN;");
  const query= `INSERT INTO review(id,appl_id,stars,neg_feedback,first_name,last_name) VALUES(${math.random()},${applicationId},${rating},${feedback},${firstName},${lastName} );`;
  await client.query(query, callback);
  await client.query("COMMIT;");
}
exports.populateReviewTable = populateReviewTable;

async function getApplicationOnDashboard (client,callback,applicationId){
  await client.query("BEGIN;");
  const query = `SELECT company_name, title, issue_count_speed, issue_count_design, issue_count_accessibility, issue_count_usability from applicant WHERE id = ${applicationId}));`;
  await client.query(query, callback);
  await client.query("COMMIT;");
}
exports.getApplicationOnDashboard = getApplicationOnDashboard;

async function getReviewsOnDashboard (client, callback, applicationId){
  await client.query("BEGIN;");
  const query= `SELECT first_name, last_name, stars, neg_feedback FROM reviews WHERE appl_id = ${applicationId});`;
  await client.query(query, callback);
  await client.query("COMMIT;");
}
exports.getReviewsOnDashboard = getReviewsOnDashboard;