import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Successfully connected to MongoDB ✅");
    app.listen(PORT, () => {
      console.log(`Listening on server: http://localhost:${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error("Fail to connect with DB: ", err);
  });
