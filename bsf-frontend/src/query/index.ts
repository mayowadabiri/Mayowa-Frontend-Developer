import { useQuery } from '@tanstack/react-query';
import { getCapsules } from '../api';

export const useGetCapsules = (query: any) => {
  return useQuery(['Get_capsules'], () => getCapsules(query), {
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
