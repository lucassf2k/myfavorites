import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "docker",
  password: process.env.DB_PASSWORD || "docker",
  database: process.env.DB_DATABASE || "myfavoritesdb",
});

client
  .connect()
  .then(() => console.log("🗃️  Database connected sucessfull"))
  .catch((error) => console.log(error));

async function Query(query, values) {
  const { rows } = await client.query(query, values);
  return rows;
}

export { Query };
