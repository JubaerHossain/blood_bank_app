/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React from 'react';
import axios from 'axios';
import config from '../config';
import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN } from '../constants/types';

const axiosInstance = axios.create({
  baseURL: config.api.base,
});

// eslint-disable-next-line no-undef
const getAuthToken = async () => await AsyncStorage.getItem(TOKEN);

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${getAuthToken()}`,
    'Content-Type': 'application/json',
  };
  // you can also do other modification in config
  return config;
}, (error) => Promise.reject(error));

export default axiosInstance;
