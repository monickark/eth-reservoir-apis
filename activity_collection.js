const sdk = require('api')('@reservoirprotocol/v1.0#60b1zolcj5z4gp');

sdk.auth('keyaKW1B87fAu7Oo3');
  sdk.getCollectionsActivityV5({limit: '20', sortBy: 'eventTimestamp', includeMetadata: 'true', accept: '*/*'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));