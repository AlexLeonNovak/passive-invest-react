import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PersistentEnum } from '../core/enums/persistent.enum';

export const usePersistentContent = (keyPersist: PersistentEnum, defaultValue?: any) => {
  const queryClient = useQueryClient();
  const key = `persist[${keyPersist}]`;
  const { data } = useQuery([key], () => JSON.parse(localStorage.getItem(key) || 'null') || defaultValue, {
    cacheTime: 1,
  });

  const { mutateAsync: setValue } = useMutation(
    (value: any) => {
      localStorage.setItem(key, JSON.stringify(value));
      return Promise.resolve();
    },
    {
      onMutate: (mutatedData: any) => {
        const current = data;
        queryClient.setQueryData([key], mutatedData);
        return current;
      },
      onError: (_: any, __: any, rollback: any) => {
        queryClient.setQueryData([key], rollback);
      },
    },
  );

  return [data, setValue];
};
