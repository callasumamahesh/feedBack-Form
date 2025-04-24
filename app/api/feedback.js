// pages/api/test-db.js
import { connectToDB } from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const db = await connectToDB();
    const collections = await db.listCollections().toArray();

    res.status(200).json({ message: 'Connected to MongoDB!', collections });
  } catch (err) {
    res.status(500).json({ error: 'Connection failed', details: err.message });
  }
}
