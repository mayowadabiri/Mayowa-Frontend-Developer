import axios from 'axios';
import { SPACEX_URL } from './constant';

export const capsuleInstance = axios.create({
  baseURL: `${SPACEX_URL}/capsules`,
  headers: {
    'Content-type': 'application/json',
  },
});
