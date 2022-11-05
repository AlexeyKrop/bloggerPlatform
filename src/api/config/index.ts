import axios from 'axios';

export const instance = axios.create({
  baseURL:
    process.env.REACT_APP_BACK_URL || 'https://api-swagger.it-incubator.ru/ht_02/api',
});
