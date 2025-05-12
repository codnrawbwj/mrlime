import Fastify from "fastify";
import dotenv from "dotenv";
import cocktailRoutes from "./routes/routes/cocktail.routes.js";
import { connectToMongoDB } from "./utils/mongo.js";

dotenv.config();

const app = Fastify({
  logger: true,
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

await connectToMongoDB(MONGODB_URI);

await app.register(cocktailRoutes, { prefix: "/api" });

app.get("/", (req, res) => {
  res.send({ hello: "world" });
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
