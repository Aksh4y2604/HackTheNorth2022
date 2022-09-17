const { Pool } = require("pg");
const { v4: uuidv4 } = require("uuid");

// Run the transactions in the connection pool
exports.cockInit = async () => {
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

  // await getMatchedApplications(client, cb, 18, 50, "technology");
  await incrementIssue(client, cb, "1", "speed");

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));}

// get applications, search by age and demographics
// age can be null where you don't search for it
async function getMatchedApplications(client, callback, testerId, industr) {
  await client.query("BEGIN;");
  const result = await client.query(`SELECT company_name,product_desc, title, pay from applicant WHERE target_min_age <= (SELECT age from tester WHERE id = ${testerId}) AND (SELECT age from tester WHERE id = ${testerId}) <= CAST(target_max_age as INT) AND (target_occupation = (SELECT occupation from tester where id = ${testerID}));`, callback);
  await client.query("COMMIT;");
  return result;
}

async function incrementIssue(client, callback, applicationId, issueName) {
  await client.query("BEGIN;");
  const columnName = 'issue_count_' + issueName;
  const result = await client.query("UPDATE applicant SET " + columnName + " = " + columnName + " + 1 WHERE id = " + applicationId + ";", callback);
  await client.query("COMMIT;");
  return result;
}
