import { capsuleInstance } from '../utils/axios-config';

export const getCapusleQuery = async (query: any) => {
  console.log(query);
  const response = await capsuleInstance.post(`/query`, query);
  return response.data;
};
