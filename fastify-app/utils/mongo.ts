import mongoose from "mongoose";

export async function connectToMongoDB(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (e) {
    console.log("❌ MongoDB connection failed: ", e);
    process.exit(1);
  }
}
