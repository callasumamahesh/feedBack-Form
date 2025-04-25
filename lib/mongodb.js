// lib/mongodb.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://bandaumamahesh:feedbackdata@cluster0.1mkcyzas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Reusable function to connect and return the database
async function connectToDB(dbName = "feedbackDB") {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

module.exports = { connectToDB };
