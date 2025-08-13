import "dotenv/config";
import "reflect-metadata";
import cors from "cors";
import express from "express";
import { connection } from "@database/config/connection";
import router from "./routes";

const app = express();

app.use(cors({ 
  origin: "http://localhost:5173" 
}));
app.use(express.json());
app.use("/api", router);

connection.initialize()
  .then(() => console.log('📦 Banco de dados conectado.'))
  .catch((err) => console.error('Erro ao conectar DB', err));

export default app;