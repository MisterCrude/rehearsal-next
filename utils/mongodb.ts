import { MongoClient, Db } from "mongodb";

let MONGODB_URI = process.env.MONGODB_URI || "";
let MONGODB_DB = process.env.MONGODB_DB || "";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (!MONGODB_DB) {
  throw new Error("Please define the MONGODB_DB environment variable");
}

export const connectToDatabase = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
};
