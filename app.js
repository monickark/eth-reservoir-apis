const sdk = require('api')('@reservoirprotocol/v1.0#60b1zolcj5z4gp');

sdk.auth('keyaKW1B87fAu7Oo3');
sdk.getCollectionsV5({
  includeTopBid: 'false',
  normalizeRoyalties: 'false',
  useNonFlaggedFloorAsk: 'false',
  sortBy: 'allTimeVolume',
  limit: '20',
  accept: '*/*'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));