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

const brand = 'Montlimart';

async function findProductsByBrand(db, brand) {
    const collection = db.collection('products');
    const products = await collection.find({ brand }).toArray();
    console.log(`Found ${products.length} products for brand '${brand}'`);
    console.log(products);
}

async function query1() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db(MONGODB_DB_NAME);

    try {
        await findProductsByBrand(db, brand);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

async function findProductsByPriceLessThan(db, price) {
    const collection = db.collection('products');
    const products = await collection.find({ price: { $lt: price } }).toArray();
    console.log(`Found ${products.length} products with price less than ${price}`);
    console.log(products);
}


async function query2() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db(MONGODB_DB_NAME);

    try {
        await findProductsByPriceLessThan(db, 20);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

async function findProductsSortedByPrice(db, sortDirection = 1) {
    const collection = db.collection('products');
    const sort = { price: sortDirection };
    const products = await collection.find().sort(sort).toArray();
    console.log(`Found ${products.length} products sorted by price (in ${sortDirection === 1 ? 'ascending' : 'descending'} order)`);
    console.log(products);
}

async function query3() {
    const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db(MONGODB_DB_NAME);

    try {
        await findProductsSortedByPrice(db,-1); //-1 to sort the result in descending order
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

query1()
query2()
query3()






