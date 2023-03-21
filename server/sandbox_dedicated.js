const dedicatedbrand = require('./eshops/dedicatedbrand');
const fs = require('fs').promises;

async function sandbox(eshops) {
  try {
    for (let i = 0; i < eshops.length; i++) {
      const eshop = eshops[i];
      console.log(`🕵️‍♀️  browsing ${eshop} eshop`);

      const products = await dedicatedbrand.scrape(eshop);

      console.log(products);

      // Convert the products array to JSON format
      const jsonProducts = JSON.stringify(products);

      // Write the JSON data to a file named after the eshop's name
      const eshopName = eshop.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_');
      await fs.writeFile(`products_${eshopName}.json`, jsonProducts, 'utf8');
      console.log(`File for ${eshop} saved successfully!`);
    }

    console.log('done');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const eshops = [
    'https://www.dedicatedbrand.com/en/men/all-men',
  'https://www.dedicatedbrand.com/en/men/all-men#page=2',
    'https://www.dedicatedbrand.com/en/men/all-men#page=3',
    'https://www.dedicatedbrand.com/en/men/all-men#page=4',
    'https://www.dedicatedbrand.com/en/men/all-men#page=5',
    'https://www.dedicatedbrand.com/en/men/all-men#page=6',
    'https://www.dedicatedbrand.com/en/men/all-men#page=7',
    'https://www.dedicatedbrand.com/en/men/all-men#page=8',
    'https://www.dedicatedbrand.com/en/men/all-men#page=9',
    'https://www.dedicatedbrand.com/en/men/all-men#page=10',
  'https://www.dedicatedbrand.com/en/men/all-men#page=11',
    'https://www.dedicatedbrand.com/en/men/all-men#page=12',
    'https://www.dedicatedbrand.com/en/men/all-men#page=13',
    'https://www.dedicatedbrand.com/en/men/all-men#page=14',
    'https://www.dedicatedbrand.com/en/men/all-men#page=15',
    'https://www.dedicatedbrand.com/en/men/all-men#page=16',
    'https://www.dedicatedbrand.com/en/men/all-men#page=17',
  'https://www.dedicatedbrand.com/en/women/all-women',
    'https://www.dedicatedbrand.com/en/women/all-women#page=2',
    'https://www.dedicatedbrand.com/en/women/all-women#page=3',
    'https://www.dedicatedbrand.com/en/women/all-women#page=4',
    'https://www.dedicatedbrand.com/en/women/all-women#page=5',
    'https://www.dedicatedbrand.com/en/women/all-women#page=6',
    'https://www.dedicatedbrand.com/en/women/all-women#page=7',
    'https://www.dedicatedbrand.com/en/women/all-women#page=8',
    'https://www.dedicatedbrand.com/en/women/all-women#page=9',
    'https://www.dedicatedbrand.com/en/women/all-women#page=10',
    'https://www.dedicatedbrand.com/en/women/all-women#page=11',
    'https://www.dedicatedbrand.com/en/women/all-women#page=12',
    'https://www.dedicatedbrand.com/en/women/all-women#page=13',
    'https://www.dedicatedbrand.com/en/women/all-women#page=14',
    'https://www.dedicatedbrand.com/en/women/all-women#page=15',
    'https://www.dedicatedbrand.com/en/women/all-women#page=16',
    'https://www.dedicatedbrand.com/en/women/all-women#page=17',
    'https://www.dedicatedbrand.com/en/women/all-women#page=18',
    'https://www.dedicatedbrand.com/en/women/all-women#page=19',
  'https://www.dedicatedbrand.com/en/kids/t-shirts',
  'https://www.dedicatedbrand.com/en/kids/sweatshirts',
    'https://www.dedicatedbrand.com/en/kids/bottoms',
    'https://www.dedicatedbrand.com/en/kids/swimwear',
    'https://www.dedicatedbrand.com/en/kids/sale'

];

sandbox(eshops);


