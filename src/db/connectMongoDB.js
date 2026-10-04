import mongoose from 'mongoose';
import dns from 'node:dns/promises';

dns.setServers(['1.1.1.1']);
export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (err) {
    console.dir(err);
    process.exit(1);
  }
}
