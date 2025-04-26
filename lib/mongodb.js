// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.uriImp;

export async function connectToDB() {
  if (mongoose.connection.readyState === 1) {
    return; // Already connected
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "feedbackDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
