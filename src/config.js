/* eslint-disable */
const api = {
    localhost: 'https://btss.xyz',
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
  