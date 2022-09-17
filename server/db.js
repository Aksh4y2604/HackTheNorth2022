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

  await getMatchedApplications(client, cb, 18, 50, "technology");

  // Exit program
  process.exit();
})().catch((err) => console.log(err.stack));}

// get applications, search by age and demographics
// age can be null where you don't search for it
async function getMatchedApplications(client, callback, minAge, maxAge, industr) {
  await client.query("BEGIN;");
  const result = await client.query("SELECT * FROM tester;", callback);
  await client.query("COMMIT;");
  return result;
}