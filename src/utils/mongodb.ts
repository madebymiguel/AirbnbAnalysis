import * as mongoDB from "mongodb";

export const collections: { spreadSheet?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  const collectionName = process.env.MONGODB_COLLECTION;
  if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  if (!dbName) {
    throw new Error("Please add your Mongo DB Name to .env.local");
  }

  if (!collectionName) {
    throw new Error("Please add your Mongo Collection Name to .env.local");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const airbnbCollection: mongoDB.Collection = db.collection(collectionName);

  collections.spreadSheet = airbnbCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${airbnbCollection.collectionName}`
  );
  return { db };
}
