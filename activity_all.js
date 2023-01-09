const sdk = require('api')('@reservoirprotocol/v1.0#2qtw99lckzc3ro');

sdk.auth('keyaKW1B87fAu7Oo3');
sdk.getActivityV4({includeMetadata: 'false', limit: '20', sortDirection: 'desc', accept: '*/*'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));