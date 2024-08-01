// lib/mongodb.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const url: string = process.env.DB_CONNECTION_URL as string;

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!url) {
  throw new Error('Please add your Mongo url to .env.local');
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(url, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}

export default clientPromise;
