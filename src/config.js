/* eslint-disable */
const api = {
    localhost: 'http://b8beff8d4e4d.ngrok.io',
    staging: 'https://jsonplaceholder.typicode.com',
    production: 'https://btss.xyz',
  };
  
  const config = {
    api: {              
      base: api.production,
      tokenLabel: 'Authorization',
      contentType: 'application/json; charset=UTF-8',
      pageSize: 100,
      tokenCheckMinute: 5,
    },
  };
  
  export default config;
  