import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {

};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve the MongoClient instance
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, create a new MongoClient instance for each request
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export async function connectToDatabase() {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB); // Ensure this variable is set in your .env.local file
    return { client, db };
}
