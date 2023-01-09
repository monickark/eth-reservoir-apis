const sdk = require('api')('@reservoirprotocol/v1.0#60b1zolcj5z4gp');

sdk.auth('keyaKW1B87fAu7Oo3');
sdk.server('https://api.reservoir.tools');
sdk.getTokensTokenActivityV4({token: 'token', accept: '*/*'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));