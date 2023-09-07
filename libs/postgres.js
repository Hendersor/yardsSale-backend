const { Client } = require("pg");

async function getConection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "francisco",
    password: "admin123",
    database: "yard_sale",
  });
  await client.connect();
  return client;
}

module.exports = { getConection };
