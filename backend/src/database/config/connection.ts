import "dotenv/config";
import "reflect-metadata";
import { join } from "path";
import { DataSource } from "typeorm";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_DATA } = process.env;

export const connection = new DataSource({
  type: "postgres",
  host: DB_HOST!,
  port: Number(DB_PORT!),
  username: DB_USER!,
  password: DB_PASS!,
  database: DB_DATA!,
  synchronize: false,
  entities: [join(__dirname , "../entities/**/*.{ts,js}")],
  migrations: [join(__dirname,  "../migrations/**/*.{ts,js}")],
});