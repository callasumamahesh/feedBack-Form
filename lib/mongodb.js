// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectToDB() {
  try {
    if (!client.topology?.isConnected()) {
      await client.connect();
      console.log('✅ Connected to MongoDB');
    }

    const db = client.db(process.env.MONGODB_DB);
    return db;
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
}
