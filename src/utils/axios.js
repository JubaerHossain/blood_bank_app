/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React from 'react';
import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
  baseURL: config.api.base,
  // headers: {'Content-Type': 'application/json; charset=utf-8'}
});

// eslint-disable-next-line no-undef
const getAuthToken = () => 'token';

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
  };
  // you can also do other modification in config
  return config;
}, (error) => Promise.reject(error));

// axiosInstance.interceptors.response.use((response) => {
//   if (response.status === 401) {
//     // your failure logic
//     return <Redirect to="/login" />;
//   }
//   return response;
// }, (error) => Promise.reject(error));

export default axiosInstance;
