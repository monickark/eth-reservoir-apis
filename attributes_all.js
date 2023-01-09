const sdk = require('api')('@reservoirprotocol/v1.0#2qtw99lckzc3ro');

sdk.auth('keyaKW1B87fAu7Oo3');
sdk.server('https://api.reservoir.tools');
sdk.getCollectionsCollectionAttributesAllV2({collection: '0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63', accept: '*/*'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));