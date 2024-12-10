import { Client } from "pg";

export const client: Client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

export const startDatabase = async (): Promise<void> => {
  await client.connect();
  console.log("Database connected");
};
export const createTables = async () => {
  try {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS "users" (
      "id" SERIAL PRIMARY KEY,
      "name" VARCHAR(45) NOT NULL,
      "email" VARCHAR(60) NOT NULL UNIQUE,
      "password" VARCHAR(120) NOT NULL
    );`;

    await client.query(createTableQuery);
    console.log("Tables are ready to work!");
  } catch (error) {
    console.log(error);
  }
};
