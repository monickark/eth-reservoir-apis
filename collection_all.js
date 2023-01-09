const sdk = require('api')('@reservoirprotocol/v1.0#2qtw99lckzc3ro');

sdk.auth('keyaKW1B87fAu7Oo3');
sdk.getCollectionsV5({
  includeTopBid: 'false',
  normalizeRoyalties: 'false',
  useNonFlaggedFloorAsk: 'false',
  sortBy: 'allTimeVolume',
  limit: '20',
  accept: '*/*'
})
  .then(({ data }) => console.log(data.collections))
  .catch(err => console.error(err));