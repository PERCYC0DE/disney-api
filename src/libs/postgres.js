const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "ppjcode",
    password: "ppjcode",
    database: "disney-api",
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
