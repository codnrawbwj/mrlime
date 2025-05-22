import Fastify from "fastify";
import dotenv from "dotenv";
import cocktailRoutes from "./routes/routes/cocktail.routes.js";
import { connectToMongoDB } from "./utils/mongo.js";
import cors, { FastifyCorsOptions } from "@fastify/cors";
dotenv.config();

const app = Fastify({
  logger: true,
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

await connectToMongoDB(MONGODB_URI);

await app.register(cocktailRoutes, { prefix: "/api" });

await app.register(cors, {
  origin:
    process.env.NODE_ENV === "development"
      ? ["http://localhost:3000"]
      : [process.env.FRONTEND_URL, process.env.STAGING_URL].filter(Boolean),
  credentials: true,
} as FastifyCorsOptions);

// health check
app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.listen(
  {
    port: PORT,
    host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost",
  },
  (error, address) => {
    if (error) {
      app.log.error(error);
      process.exit(1);
    }
  }
);
