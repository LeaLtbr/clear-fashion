const {MongoClient} = require('mongodb');
const MONGODB_URI = "mongodb+srv://lealuttenbacher:sPVLopuWtyfWWVM0@cluster0.4k4nejv.mongodb.net/?retryWrites=true&w=majority";
const MONGODB_DB_NAME = 'clearfashion';

async function connectToDatabase() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db(MONGODB_DB_NAME);
    console.log('Connected to MongoDB database:', MONGODB_DB_NAME);

    // Any additional code that needs to interact with the database can be added here

    // Don't forget to close the connection when you're done!
    await client.close();
    console.log('Disconnected from MongoDB database:', MONGODB_DB_NAME);
}

connectToDatabase().catch((error) => console.error(error));

const fs = require('fs');

async function insertProducts(db, products) {
    const collection = db.collection('products');
    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} products inserted`);
    console.log(result);
}
async function main() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db(MONGODB_DB_NAME);

    try {
        const directoryPath = 'C:/Users/lealu/OneDrive/Documents/ESILV/A4/Semestre 2/Web Application Architecture/clear-fashion/server/my scrapped products';
        const files = await fs.promises.readdir(directoryPath);

        const promises = files.map(async (file) => {
            const data = await fs.promises.readFile(`${directoryPath}/${file}`);
            const products = JSON.parse(data);
            return insertProducts(db, products);
        });

        await Promise.all(promises);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main();



