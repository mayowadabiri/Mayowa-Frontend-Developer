import axios from 'axios';
import { axiosInstance } from '../constants/axios';
import { ICpasulesQuery } from '../types';

export const getCapsules = async (query: any): Promise<ICpasulesQuery> => {
  try {
    const response = await axiosInstance.post('/query', query);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message as string);
    }
    throw new Error(
      'Error processing request, please check your internet connection'
    );
  }
};
