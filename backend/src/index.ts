import "reflect-metadata";
import "dotenv/config";
import app from './app';

const HOST = process.env.SERVER_HOST! || "localhost";
const PORT = Number(process.env.SERVER_PORT) || 3000;

app.listen(PORT, HOST);