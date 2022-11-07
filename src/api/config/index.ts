import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL || 'https://nest-blog3.herokuapp.com/',
});
