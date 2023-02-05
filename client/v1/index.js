// Invoking strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [
  {
    'name': 'Faguo',
    'url': 'https://www.faguo-store.com'
  },
  {
    'name': 'Loom',
    'url': 'https://www.loom.fr'
  },
  {
    'name': 'Ecclo',
    'url': 'https://ecclo.fr/'
  }
];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);

/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO 1: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

var cheapest_faguo = new URL ('https://www.faguo-store.com/fr/vetements/7606-arcy-t-shirt-en-coton-recycle-kaki.html');
var cheapest_loom = new URL ('https://www.loom.fr/collections/t-shirts-polos/products/le-t-shirt-homme');
var cheapest_ecclo = new URL('https://ecclo.fr/products/t-shirt-noir-boycott-world-cup-2022');

console.log(cheapest_faguo);
console.log(cheapest_loom);
console.log(cheapest_ecclo);
/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file `data.js`
 * 👕
 */

// 🎯 TODO 2: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

const marketplace = [
  {
    link:
        'https://panafrica-store.com/en/product/panafrica-arusha-ivoire-sneakers-ethical-wax-suede-responsible-returnable-recyclable/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-ivoire',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2021/09/RUN-06_01-432x533.jpg',
    uuid: '818f8262-abc9-5a32-a717-adab11ec222e',
    released: '2022-08-04'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-t-shirt-homme',
    brand: 'loom',
    price: 25,
    name: 'Le t-shirt',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/XT7oCJ0N-Il-jZBYBddhZdqc0Ilhb7f0USo1_1InOq8.jpg?v=1673023717&width=3000',
    uuid: '244fa0aa-ba21-59b7-8f74-ba6fed993746',
    released: '2022-10-08'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-popeline-blanche-poignets-mousquetaires-41.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en popeline blanche à poignets mousquetaires',
    photo:
        'https://media2.hast.fr/6499-home_default/xchemise-classique-en-popeline-blanche-poignets-mousquetaires.jpg.pagespeed.ic.Qm9Qd62ycG.webp',
    uuid: '4e3edd1c-03cb-581f-a35b-0025da408aa6',
    released: '2022-12-27'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-twill-blanche-a-poignets-mousquetaires-296.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en twill blanche à poignets mousquetaires',
    photo:
        'https://media1.hast.fr/6502-home_default/xchemise-classique-en-twill-blanche-a-poignets-mousquetaires.jpg.pagespeed.ic._U-l2-iKzk.webp',
    uuid: '51340ee8-f52d-5dd6-a5fd-dc0d43589c9c',
    released: '2022-12-03'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-sweat-a-capuche',
    brand: 'loom',
    price: 75,
    name: 'Le sweat à capuche',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/L0jICxuDdFJwYX7Z3eOtHI8ab18c0gMXuOArVgAYTg8_b97a60c5-c261-49db-9e91-5a7093f16a87.jpg?v=1672827139&width=3000',
    uuid: 'c5a41845-6f4e-548c-94c3-e98a78df585b',
    released: '2022-10-02'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-oxford-bleue-a-poignets-mousquetaires-841.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en oxford bleue à poignets mousquetaires',
    photo:
        'https://media1.hast.fr/7042-home_default/xchemise-classique-en-oxford-bleue-a-poignets-mousquetaires.jpg.pagespeed.ic.Ujl47qfFCV.webp',
    uuid: '991c49a9-ec95-5686-a823-9de2e5eac97b',
    released: '2022-09-08'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-bonnet-homme',
    brand: 'loom',
    price: 30,
    name: 'Le bonnet',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/r77nOz0MXRXPFSF4jSt-kUiAaodn7_aStxiOWe5t2QQ.jpg?v=1672915396&width=3000',
    uuid: '2a7a2d9e-ba3e-5cdb-a5e1-e60d4106dc0f',
    released: '2023-01-20'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-ceinture-large',
    brand: 'loom',
    price: 60,
    name: 'La ceinture large',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/aY1D6jJ2z6sZEMeSwMqwhrOSRyfvSr7hQdH0Kap6FI4.jpg?v=1672822567&width=3000',
    uuid: '85c74583-f096-53cb-800b-83f86d15a857',
    released: '2022-11-22'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-sweat',
    brand: 'loom',
    price: 60,
    name: 'Le sweat',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/3GO_1U7aNsrAr-RXk03OfqlvGZOYTGNRiXsRurR_jrM.jpg?v=1672827988&width=3000',
    uuid: '41bdf71d-6faa-51e0-b1ea-fed969f42ae9',
    released: '2022-12-16'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-pull-epais-homme',
    brand: 'loom',
    price: 95,
    name: 'Le pull épais',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/FIfhvkbfmCHebeo6259hDYIo7jbf3WFV_l-edL8H1Zw.jpg?v=1672826418&width=3000',
    uuid: 'bfa8e5e8-13fa-58a0-9c01-28030f093000',
    released: '2022-09-04'
  },
  {
    link: 'https://panafrica-store.com/en/product/arusha-violet/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-violet',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08548-432x533.jpg',
    uuid: 'b37a29a0-8c0e-534b-8cc0-b98b47c8d658',
    released: '2022-12-21'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-chemise-coton-lin',
    brand: 'loom',
    price: 65,
    name: 'La chemise coton-lin',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/PJTDnRRpPVAS_xfGfx_yjCq6GiSnyv2BTV9AuqGOvEQ.jpg?v=1672822844&width=3000',
    uuid: 'c064d689-ea2c-5744-b4d9-ca4ff4dedd5b',
    released: '2022-10-07'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-jogging',
    brand: 'loom',
    price: 70,
    name: 'Le jogging',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/M6eJbzzjsoPqJgyfIMnBrw0KlnalpPKfhAUE1NoC2yk.jpg?v=1673019972&width=3000',
    uuid: '95694b7e-b940-52ee-9b7e-dac70e8a0dcf',
    released: '2022-08-11'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-pull-col-roule',
    brand: 'loom',
    price: 80,
    name: 'Le pull col roulé',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/Aa9m5j_6wOznB52fcmbvVLbdgdNAYmWI46ufj6xyMRM.jpg?v=1672826390&width=3000',
    uuid: '7d80d448-83fe-5a14-9190-e83e0a4db386',
    released: '2022-12-25'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-chemise-en-jean',
    brand: 'loom',
    price: 65,
    name: 'La chemise en jean',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/XqlQkHweIOZO5ROWgRRUgiWJJMr7apeUdDcwAtqTLNA.jpg?v=1672834547&width=3000',
    uuid: 'bb17cd80-3e2b-58e3-84c1-c8d045d33cc2',
    released: '2023-01-21'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-cintree-en-fil-a-fil-bleue-a-poignets-mousquetaires-650.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise cintrée en fil-à-fil bleu clair à poignets mousquetaires',
    photo:
        'https://media2.hast.fr/6523-home_default/xchemise-cintree-en-fil-a-fil-bleue-a-poignets-mousquetaires.jpg.pagespeed.ic.6siAXwIi-z.webp',
    uuid: 'bbfc2a05-4e65-5139-8b57-d35a81ed1fc2',
    released: '2022-08-12'
  },
  {
    link: 'https://www.hast.fr/fr/chemise-cintree-en-popeline-blanche-842.html',
    brand: 'hast',
    price: 79,
    name: 'Chemise cintrée en popeline blanche',
    photo:
        'https://media1.hast.fr/7112-home_default/xchemise-cintree-en-popeline-blanche.jpg.pagespeed.ic.ctX1ZXC5E1.webp',
    uuid: '39c8dd50-960a-534c-8d83-bedf0854e927',
    released: '2022-11-25'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-popeline-bleu-clair-a-poignets-mousquetaires-203.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en popeline bleu clair à poignets mousquetaires',
    photo:
        'https://media2.hast.fr/6522-home_default/xchemise-classique-en-popeline-bleu-clair-a-poignets-mousquetaires.jpg.pagespeed.ic.jYkIjCwn_H.webp',
    uuid: 'e58b90d3-ac4e-57ed-becd-cb57cf1a80f9',
    released: '2022-11-24'
  },
  {
    link:
        'https://panafrica-store.com/en/product/arusha-saphir-responsible-colorful-ethical-sneakers/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-saphir',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08390-432x533.jpg',
    uuid: '6dc62b71-27ed-5777-ad75-a6526f2cc67e',
    released: '2022-12-16'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-oxford-bleu-clair-a-poignets-mousquetaires-96.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en oxford bleu clair à poignets mousquetaires',
    photo:
        'https://media1.hast.fr/6625-home_default/chemise-classique-en-oxford-bleu-clair-a-poignets-mousquetaires.jpg',
    uuid: '2b260305-b401-5477-8d6c-258c456d2bfa',
    released: '2022-12-14'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-boxer',
    brand: 'loom',
    price: 20,
    name: 'Le boxer',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/CaJ7HhFr1595H4N4QftXl3CJQgsAZXcd9flFpMhtFFQ.jpg?v=1672828469&width=3000',
    uuid: '1035e7a1-e4a3-55e0-9650-4594cf563a7f',
    released: '2022-11-20'
  },
  {
    link: 'https://panafrica-store.com/en/product/arusha-amande/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-amande',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08544-432x533.jpg',
    uuid: 'c49317b0-15aa-5c13-8d04-2ba818147794',
    released: '2022-11-22'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-oxford-blanche-a-poignets-mousquetaires-295.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en oxford blanche à poignets mousquetaires',
    photo:
        'https://media2.hast.fr/6501-home_default/xchemise-classique-en-oxford-blanche-a-poignets-mousquetaires.jpg.pagespeed.ic.ELL2Zqgtr_.webp',
    uuid: '42961ee8-88a3-5afc-9b6b-37e9a148b3f4',
    released: '2022-10-20'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-classique-en-fil-a-fil-bleu-clair-a-poignets-mousquetaires-801.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise en fil-à-fil bleu clair à poignets mousquetaires',
    photo:
        'https://media3.hast.fr/7540-home_default/chemise-classique-en-fil-a-fil-bleu-clair-a-poignets-mousquetaires.jpg',
    uuid: '1c3ecd2e-cb0f-5200-be34-dfae8f7ba3c1',
    released: '2022-10-30'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-pull-leger-en-coton',
    brand: 'loom',
    price: 80,
    name: 'Le pull léger en coton',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/Pl_Pbyo1WZkhHiDLKdp5dT8cfIRzqb9aRWfQnbJ3nlI.jpg?v=1673619296&width=3000',
    uuid: 'dc111227-b5d8-5f1e-9c9d-cbe2dc3c4b57',
    released: '2022-09-30'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-calecon',
    brand: 'loom',
    price: 25,
    name: 'Le caleçon',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/dfczC3rNdxGe-bsNkvJkOd_BjqyKFIlMWh5EbrXhkbg.jpg?v=1672932137&width=3000',
    uuid: 'e78b0b01-ad4d-5fa9-98aa-31a9b4b86862',
    released: '2022-08-05'
  },
  {
    link:
        'https://panafrica-store.com/en/product/arusha-sauge-colorful-responsible-sneakers/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-sauge',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08389-432x533.jpg',
    uuid: 'b8c97ffa-c6ab-5cc6-80f0-5d1d64ba4466',
    released: '2022-10-12'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/les-chaussettes-en-coton-homme',
    brand: 'loom',
    price: 12,
    name: 'Les chaussettes en coton',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/A23rSQcJTswwm_1JbsmgguaOxKm44_OMhicBy1pgyvI.jpg?v=1672835350&width=3000',
    uuid: '307262ae-9608-56e1-9443-8e4f9db3c055',
    released: '2022-11-04'
  },
  {
    link:
        'https://panafrica-store.com/en/product/panafrica-arusha-corail-colorful-responsible-sneakers-suede-recyclable/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-corail',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/04/P4262637-copie-432x533.jpg',
    uuid: '176d32d3-92b9-55d0-aa3b-45d681d16059',
    released: '2022-09-12'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-t-shirt-merinos',
    brand: 'loom',
    price: 65,
    name: 'Le t-shirt mérinos',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/rIW6ZediMVM1NI8_PutundO35Bqei5SsHs63s_cEpL8.jpg?v=1673367569&width=3000',
    uuid: 'ab49ce97-f243-5ad3-8a81-d5316acda88d',
    released: '2022-12-04'
  },
  {
    link:
        'https://panafrica-store.com/en/product/panafrica-arusha-lila-colourful-responsible-ethical-suede-sneakers-returnable/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-lila',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/04/P4262638-copie-432x533.jpg',
    uuid: '519fca6d-ba15-5a48-839a-e6b612337701',
    released: '2022-09-01'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-polo',
    brand: 'loom',
    price: 50,
    name: 'Le polo',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/lfPrmKPBPaMEnd31yPi8BmUE_gx79y6CwRbWDBNMglw.jpg?v=1672826181&width=3000',
    uuid: '68e71c50-b81b-5e0e-8ae4-1c3cd716b7c1',
    released: '2022-11-08'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/les-baskets',
    brand: 'loom',
    price: 115,
    name: 'Les baskets',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/C329dXxBQdi45phI8ZdF_LR4IhtzN9tQaMhp2sXDGFw.jpg?v=1672828315&width=3000',
    uuid: '686f722d-0e2c-5ce4-907a-8882b9862171',
    released: '2023-01-19'
  },
  {
    link: 'https://panafrica-store.com/en/product/arusha-vanille/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-vanille',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08547-432x533.jpg',
    uuid: 'c2246893-26d7-5f45-9434-eff2dd2fbc70',
    released: '2022-11-06'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/les-socquettes-homme',
    brand: 'loom',
    price: 9,
    name: 'Les socquettes',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/OP6MudEE-eqy5qP5xkFcX5fwfk52JRl5UvNvNKkLr0.jpg?v=1672828528&width=3000',
    uuid: '3b4ca0de-a0d7-5554-9354-b86bc2b9b748',
    released: '2023-01-21'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-jean-homme',
    brand: 'loom',
    price: 100,
    name: 'Le jean',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/LNWXR6dOYdtgJVu8FbO1CHHx1JOjb74Hp3_lf7veUJI.jpg?v=1672852345&width=3000',
    uuid: '0f028753-1a9e-5991-93e6-32f57d3a8fe2',
    released: '2022-12-18'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-chemise-en-flanelle',
    brand: 'loom',
    price: 60,
    name: 'La chemise en flanelle',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/rdsX5zbmtFXaUyD3VMGEACgGHTP9oCjE4c-HqQiaxWI.jpg?v=1672822855&width=3000',
    uuid: '336074cd-5a72-5883-af4f-56a46a51ad33',
    released: '2022-09-26'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-jean-noir-homme',
    brand: 'loom',
    price: 90,
    name: 'Le jean noir',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/uDJfoaLrndQHkZ6074RIlV_pSQjFK9tL4f0UUPDQHE0.jpg?v=1672830701&width=3000',
    uuid: '9ef29a12-1b30-5114-a753-316f38fa80a8',
    released: '2022-09-07'
  },
  {
    link: 'https://panafrica-store.com/en/product/arusha-ciel/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-ciel',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08546-432x533.jpg',
    uuid: '3486554f-75e7-57f8-afcd-0a3efa8dc9eb',
    released: '2022-08-26'
  },
  {
    link:
        'https://panafrica-store.com/en/product/panafrica-arusha-mauve-ethical-colorful-sneakers-recyclables-suede-responsible/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-mauve',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/04/P4262645-copie-432x533.jpg',
    uuid: 'ffa67d04-5d74-555b-9c1a-6024e6df43af',
    released: '2022-12-24'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/lecharpe-homme',
    brand: 'loom',
    price: 70,
    name: "L'écharpe",
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/hoTVDj_Yo-f0X7hCI_JTha0tVtFkTlxHKwHrng7nSuk.jpg?v=1672828799&width=3000',
    uuid: '668d4773-009b-5095-9d38-fd4a4f40a572',
    released: '2022-12-13'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-short',
    brand: 'loom',
    price: 65,
    name: 'Le short',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/VzjGB4uunUeFP86su1RSzfRr74Qx4bzyRTq4xQnwuVI.jpg?v=1672831390&width=3000',
    uuid: 'd1ab6154-697d-51f7-9961-30b3f10041df',
    released: '2022-10-18'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-chemise-chambray',
    brand: 'loom',
    price: 60,
    name: 'La chemise chambray',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/rzlyjr-kqEIcr2HWktwReP2Nh1n9IJ6QSUJ_bR_INC8.jpg?v=1672822792&width=3000',
    uuid: '0d24ca86-d5dc-5f75-8d71-03bbb54da071',
    released: '2022-11-22'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-chino',
    brand: 'loom',
    price: 85,
    name: 'Le chino',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/ExyYW613h7p_32_V-k1omDZUl5E81R-7k3w7por0j9w.jpg?v=1673966269&width=3000',
    uuid: 'bd254ab5-993f-5a67-9b27-b6df5840d76f',
    released: '2022-09-01'
  },
  {
    link:
        'https://www.hast.fr/fr/chemise-poignet-mousquetaire-extra-ajustee-blanche-560.html',
    brand: 'hast',
    price: 69,
    name: 'Chemise cintrée en popeline blanche poignets mousquetaires',
    photo:
        'https://media1.hast.fr/6500-home_default/xchemise-poignet-mousquetaire-extra-ajustee-blanche.jpg.pagespeed.ic.Qm9Qd62ycG.webp',
    uuid: '72801ff7-54fa-5fa9-940f-b30bd292294c',
    released: '2022-10-03'
  },
  {
    link:
        'https://panafrica-store.com/en/product/panafrica-arusha-ebene-sneakers-ethical-unisex-suede-responsible-returnable-recyclable/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-ébène',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2021/07/RUN-05_01-432x533.jpg',
    uuid: '482aae3c-ef46-5f2c-a036-7cb2894d7ccf',
    released: '2023-01-04'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-carte-cadeau-physique',
    brand: 'loom',
    price: 50,
    name: 'La carte cadeau physique',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/lD9REWMEDtm1cbs4MUzAaOcB_jKg6dWvtRd4Krv5Kk.jpg?v=1672833871&width=3000',
    uuid: 'cac60100-020a-5ea9-b8ac-de043e111ebd',
    released: '2022-12-12'
  },
  {
    link: 'https://www.hast.fr/fr/chemise-blanche-a-col-casse-133.html',
    brand: 'hast',
    price: 79,
    name: 'Chemise en popeline blanche',
    photo:
        'https://media2.hast.fr/6638-home_default/chemise-blanche-a-col-casse.jpg',
    uuid: '83a3b21a-112d-5b59-9ddd-1ed6a74949f6',
    released: '2022-08-03'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/les-chaussettes-en-laine',
    brand: 'loom',
    price: 15,
    name: 'Les chaussettes en laine',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/qnjNMvQLxBesQmxwdDhJ-uv_olG7Icq6eMDX7lgl0L8.jpg?v=1672828499&width=3000',
    uuid: 'b9d36662-31a5-5fcd-81ca-8a58d2cbc271',
    released: '2022-09-28'
  },
  {
    link:
        'https://panafrica-store.com/en/product/panafrica-arusha-sable-ethical-wax-suede-shoes-responsible-returnable/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-sable',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/04/P4262642-copie-432x533.jpg',
    uuid: '2b481135-ad7a-5848-bc29-66601343cfd5',
    released: '2022-08-31'
  },
  {
    link: 'https://www.loom.fr/collections/vestiaire-homme/products/le-hoodie',
    brand: 'loom',
    price: 95,
    name: 'Le hoodie',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/Y4fbwneJWr2NFZOmsz7vU4Ti7SQHmqE7MFCqxcmqDUU.jpg?v=1672828779&width=3000',
    uuid: '43fb39bd-5e22-520b-9c6a-5eb2717f69b1',
    released: '2023-01-03'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-chemise-oxford',
    brand: 'loom',
    price: 60,
    name: 'La chemise oxford',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/zG8oiB72q5FGy2STqMay1rXEVz9cClGU6OfQcHBfEic.jpg?v=1672936083&width=3000',
    uuid: 'ed3fe824-0f6b-5c30-99b7-acd73418e4c8',
    released: '2022-11-11'
  },
  {
    link:
        'https://panafrica-store.com/en/product/arusha-terracotta-ecofriendly-colorful-sneakers/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-terracotta',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08545-432x533.jpg',
    uuid: 'b359eb8f-7b6d-5372-815e-47a36df9ce04',
    released: '2022-11-07'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/la-carte-cadeau-virtuelle',
    brand: 'loom',
    price: 25,
    name: 'La carte cadeau virtuelle',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/0bxGiJ-4WEsiMF-lIZ5r-t52wyCdRjZlX0xYRGYCuiU.jpg?v=1672822495&width=3000',
    uuid: 'ae4dbac7-94a4-5a89-9af8-155791cf0501',
    released: '2022-12-11'
  },
  {
    link:
        'https://www.loom.fr/collections/vestiaire-homme/products/le-maillot-de-bain',
    brand: 'loom',
    price: 55,
    name: 'Le maillot de bain',
    photo:
        '//cdn.shopify.com/s/files/1/1355/7899/products/cEb-n6Uzf-rNy7FG42e4josYY-ZPRxCNwJ25AFlr3qM.jpg?v=1672826148&width=3000',
    uuid: 'a58c5e4d-8603-513b-8407-b86a5cc496e6',
    released: '2022-12-22'
  },
  {
    link:
        'https://panafrica-store.com/en/product/arusha-poudre-ethical-colorful-responsible-sneakers/',
    brand: 'panafrica',
    price: 145,
    name: 'Arusha-poudré',
    photo:
        'https://panafrica-store.com/wp-content/uploads/2022/10/PAN08384-432x533.jpg',
    uuid: '1cf18c46-4b9c-56fd-9a86-46225fd9e295',
    released: '2022-10-28'
  }
];

var longueur = marketplace.length;
console.log(longueur)


// 🎯 TODO 3: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have


const brands_name = marketplace.map(product => product.brand);
console.log(`Number of brands: ${brands_name.length}`);

const unique_brands = [...new Set(marketplace.map(product => product.brand))];
console.log(`Number of unique brands: ${unique_brands.length}`);

// 🎯 TODO 4: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

function sortByPrice(marketplace) {
  return marketplace.sort(function(a, b) {
    return a.price - b.price;
  });
}

const sortedMarketplace = sortByPrice(marketplace);
console.log(sortedMarketplace);

// 🎯 TODO 5: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

function sortByDate(marketplace) {
  return marketplace.sort(function(a, b) {
    return new Date(b.released) - new Date(a.released);
  });
}

const sortedByDate = sortByDate(marketplace);
console.log(sortedByDate)

// 🎯 TODO 6: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

function filterByPrice(marketplace) {
  return marketplace.filter(function(product) {
    return product.price >= 50 && product.price <= 100;
  });
}

const filter = filterByPrice(marketplace);
console.log(filter)

// 🎯 TODO 7: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average

let sum = 0;
for (const product of marketplace) {
  sum += product.price;
}
const average = sum / marketplace.length;
console.log(average);


/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO 8: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

const brands = {};

for (const product of marketplace) {
  const brand = product.brand;

  if (!brands[brand]) {
    brands[brand] = [];
  }

  brands[brand].push(product);
}

console.log(brands);

for (const brand in brands) {
  console.log(`Number of products for ${brand}: ${brands[brand].length}`);
}

// 🎯 TODO 9: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

Object.keys(brands).forEach(brand => {
  brands[brand] = sortByPrice(brands[brand]);
});

console.log(brands);

// 🎯 TODO 10: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

Object.keys(brands).forEach(brand => {
  brands[brand] = sortByDate(brands[brand]);
});

console.log(brands);

/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO 11: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products





/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/homme?filter.v.availability=1&filter.p.m.gender.type=Homme&sort_by=manual
 * 🧥
 */

const COTELE_PARIS = [
  {
    'link':
        'https://coteleparis.com/collections/homme/products/casquette-cotele-vert-olive?_pos=7&_fid=2fee5844b&_ss=c?variant=43527862485222&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ VERT OLIVE',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/CCC.jpg?crop=center&height=1545&v=1672998800&width=1200',
    'uuid': 'f0742b42-dc8c-54ae-99a8-ebb7d6f8f44e',
    'released': '2022-12-26'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/pantalon-cargo-vert-olive?_pos=13&_fid=2fee5844b&_ss=c&variant=43470511767782?variant=43470511767782&tag=homme',
    'brand': 'coteleparis',
    'price': 120,
    'name': 'PANTALON CARGO VERT OLIVE',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/ZOOM4.png?crop=center&height=1545&v=1666946168&width=1200',
    'uuid': '2b9a47e3-ed73-52f6-8b91-379e9c8e526c',
    'released': '2022-12-03'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/doudoune-puffer-navy?_pos=1&_fid=2fee5844b&_ss=c?variant=43581300506854&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER NAVY',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/N6.png?crop=center&height=1545&v=1668444595&width=1200',
    'uuid': '65162222-255a-5ea7-81c7-fb1225193773',
    'released': '2022-11-15'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/doudoune-puffer-azur?_pos=12&_fid=2fee5844b&_ss=c?variant=43608484610278&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER AZUR',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/AZ3.png?crop=center&height=1545&v=1668444227&width=1200',
    'uuid': 'e206681e-41d7-565e-91b3-b18d99fe80c3',
    'released': '2022-10-25'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/pantalon-cargo-camel?_pos=10&_fid=2fee5844b&_ss=c&variant=43470435221734?variant=43470435221734&tag=homme',
    'brand': 'coteleparis',
    'price': 120,
    'name': 'PANTALON CARGO CAMEL',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/CAMEL2.png?crop=center&height=1545&v=1666264660&width=1200',
    'uuid': 'b3a171aa-7c56-51f4-b7fd-7d2cd1a87968',
    'released': '2022-08-26'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/casquette-cotele-noire?_pos=16&_fid=2fee5844b&_ss=c?variant=43527862288614&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ NOIRE',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/PORTEES10.jpg?crop=center&height=1545&v=1668765538&width=1200',
    'uuid': '0a228763-e73b-590b-b638-f7001b19b300',
    'released': '2022-11-20'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/pantalon-cargo-gris?_pos=2&_fid=2fee5844b&_ss=c&variant=43470494695654?variant=43470494695654&tag=homme',
    'brand': 'coteleparis',
    'price': 96,
    'name': 'PANTALON CARGO GRIS',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/GRISs3.png?crop=center&height=1545&v=1666946159&width=1200',
    'uuid': '8e39794a-f91a-5fa7-b38b-3d0b176d0ea7',
    'released': '2022-08-11'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/doudoune-puffer-camel?_pos=5&_fid=2fee5844b&_ss=c?variant=43608484577510&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER CAMEL',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/CoteleDoudouneRouille_5.jpg?crop=center&height=1545&v=1668444404&width=1200',
    'uuid': '60046927-2ef2-589d-823d-73224d6786c6',
    'released': '2023-01-21'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/casquette-cotele-camel?_pos=3&_fid=2fee5844b&_ss=c?variant=43527861928166&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ CAMEL',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/PORTEES7.jpg?crop=center&height=1545&v=1668765573&width=1200',
    'uuid': '94e80e8f-34e2-546a-95ac-11cd0aa3ba08',
    'released': '2022-09-06'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/casquette-cotele-denim?_pos=11&_fid=2fee5844b&_ss=c?variant=43527845937382&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ DENIM',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/Denim2.png?crop=center&height=1545&v=1668079318&width=1200',
    'uuid': '6f83f0f6-9343-5f8b-8822-bc347097ee49',
    'released': '2022-08-30'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/casquette-cotele-sable?_pos=14&_fid=2fee5844b&_ss=c?variant=43527862386918&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ SABLE',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/PORTEES2.jpg?crop=center&height=1545&v=1668765512&width=1200',
    'uuid': '29fede06-1f38-55d4-b970-0bbf0a668e68',
    'released': '2022-11-14'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/doudoune-puffer-rouille?_pos=9&_fid=2fee5844b&_ss=c?variant=43608490049766&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER ROUILLE',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/R3.png?crop=center&height=1545&v=1668444742&width=1200',
    'uuid': '0a8cf869-853b-5d78-ae72-298588b03f82',
    'released': '2022-08-24'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/chemise-milleraie-vert-olive?_pos=4&_fid=2fee5844b&_ss=c?variant=43565200572646&tag=homme',
    'brand': 'coteleparis',
    'price': 72,
    'name': 'CHEMISE MILLERAIE VERT OLIVE',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/Sanstitre-32.jpg?crop=center&height=1545&v=1670187986&width=1200',
    'uuid': 'af213407-d75c-5f40-9d52-14fb414224af',
    'released': '2022-10-03'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/chemise-milleraie-navy?_pos=15&_fid=2fee5844b&_ss=c?variant=43565199229158&tag=homme',
    'brand': 'coteleparis',
    'price': 90,
    'name': 'CHEMISE MILLERAIE NAVY',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/C8.jpg?crop=center&height=1545&v=1670187595&width=1200',
    'uuid': '1e40612e-fe04-5a70-be75-79ea5fa6fbbe',
    'released': '2023-01-18'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/veste-cotele-navy?_pos=8&_fid=2fee5844b&_ss=c&variant=42801558585574?variant=42801558585574&tag=homme',
    'brand': 'coteleparis',
    'price': 126,
    'name': 'VESTE CÔTELÉ NAVY',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/NAVY_PHOTO_SITE.png?crop=center&height=1545&v=1657553445&width=1200',
    'uuid': '49c4e2d8-0cb4-5867-a5b9-23bd7168149f',
    'released': '2022-08-15'
  },
  {
    'link':
        'https://coteleparis.com/collections/homme/products/pantalon-cargo-denim?_pos=6&_fid=2fee5844b&_ss=c&variant=43470484373734?variant=43470484373734&tag=homme',
    'brand': 'coteleparis',
    'price': 96,
    'name': 'PANTALON CARGO DENIM',
    'photo':
        'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/ZOOM_3a7331f6-03ee-4a01-ba18-2e56eaa5d9e2.png?crop=center&height=1545&v=1666290425&width=1200',
    'uuid': 'c4714dca-29c3-5603-818a-75c9668d53ab',
    'released': '2022-10-17'
  }
];

// 🎯 TODO 1: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.


const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

let newProducts = false;

for (const product of COTELE_PARIS) {
  const productReleaseDate = new Date(product.released);
  if (productReleaseDate > twoWeeksAgo) {
    newProducts = true;
    break;
  }
}

console.log(`There are new products: ${newProducts}`);



// 🎯 TODO 2: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€


let isReasonablePriceShop = true;

for (const product of COTELE_PARIS) {
  if (product.price > 100) {
    isReasonablePriceShop = false;
    break;
  }
}
console.log(`Is it a reasonable brand?: ${isReasonablePriceShop}`);

// 🎯 TODO 3: Find a specific product
// 1. Find the product with the uuid `2b9a47e3-ed73-52f6-8b91-379e9c8e526c`
// 2. Log the product

const uuidToFind = '2b9a47e3-ed73-52f6-8b91-379e9c8e526c';

const foundProduct = COTELE_PARIS.find(product => product.uuid === uuidToFind);

console.log(foundProduct);


// 🎯 TODO 4: Delete a specific product
// 1. Delete the product with the uuid `2b9a47e3-ed73-52f6-8b91-379e9c8e526c`
// 2. Log the new list of product

const uuidToDelete = '2b9a47e3-ed73-52f6-8b91-379e9c8e526c';

const updatedCoteleParis = COTELE_PARIS.filter(product => product.uuid !== uuidToDelete);

console.log(updatedCoteleParis);

const longueur_cotele = COTELE_PARIS.length;
console.log(`Number of products of cotele: ${longueur_cotele}`)

const longueur_update_cotele = updatedCoteleParis.length;
console.log(`Number of products of cotele update: ${longueur_update_cotele}`)


// 🎯 TODO 5: Save the favorite product
// We declare and assign a variable called `blueJacket`
let blueJacket = {
  'link':
      'https://coteleparis.com/collections/homme/products/veste-cotele-navy?_pos=8&_fid=2fee5844b&_ss=c&variant=42801558585574?variant=42801558585574&tag=homme',
  'brand': 'coteleparis',
  'price': 126,
  'name': 'VESTE CÔTELÉ NAVY',
  'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/NAVY_PHOTO_SITE.png?crop=center&height=1545&v=1657553445&width=1200',
  'uuid': '49c4e2d8-0cb4-5867-a5b9-23bd7168149f',
  'released': '2022-08-15'
};

// we make a copy of `blueJacket` to `jacket` variable
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?
console.log(blueJacket);
console.log(jacket);
console.log('The output is the same')

// we make a new assignment again
blueJacket = {
  'link':
      'https://coteleparis.com/collections/homme/products/veste-cotele-navy?_pos=8&_fid=2fee5844b&_ss=c&variant=42801558585574?variant=42801558585574&tag=homme',
  'brand': 'coteleparis',
  'price': 126,
  'name': 'VESTE CÔTELÉ NAVY',
  'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/NAVY_PHOTO_SITE.png?crop=center&height=1545&v=1657553445&width=1200',
  'uuid': '49c4e2d8-0cb4-5867-a5b9-23bd7168149f',
  'released': '2022-08-15'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

/**
 * 🎬
 * The End: last thing to do
 * 🎬
 */

// 🎯 LAST TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage


