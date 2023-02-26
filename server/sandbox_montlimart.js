/* eslint-disable no-console, no-process-exit */
const Montlimartbrand = require('./eshops/Montlimart');

async function sandbox (eshop = 'https://www.montlimart.com/37-vetements-recycles') {
    try {
        console.log(`🕵️‍♀️  browsing ${eshop} eshop`);

        const products = await Montlimartbrand.scrape(eshop)

        console.log(products);
        console.log('done');
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

const [,, eshop] = process.argv;

sandbox(eshop);