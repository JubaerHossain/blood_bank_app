/* eslint-disable */
const api = {
    localhost: 'https://4360a298ca0a.ngrok.io/blood_bank_backend',
    staging: 'https://jsonplaceholder.typicode.com',
    production: '/api/',
  };
  
  const config = {
    api: {              
      base: api.localhost,
      tokenLabel: 'Authorization',
      // tokenValue: token => 'Bearer ' + token,
      contentType: 'application/json; charset=UTF-8',
      pageSize: 100,
      tokenCheckMinute: 5,
    },
  };
  
  export default config;
  