const sdk = require('api')('@reservoirprotocol/v1.0#60b1zolcj5z5gp');

sdk.auth('keyaKW1B87fAu7Oo3');
sdk.getUsersActivityV5({
  users: '0x59DC23902395bB846d1a8c39F2e35006944E6769',
  limit: '20',
  sortBy: 'eventTimestamp',
  includeMetadata: 'true',
  accept: '*/*'
})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));