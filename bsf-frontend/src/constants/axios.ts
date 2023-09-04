import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/capsules',
  headers: {
    'Content-Type': 'application/json',
  },
});
