import { api } from "@/services/axios";
import {
  useQuery,
  type UseQueryOptions,
  type QueryKey,
} from "@tanstack/react-query";

interface QueryGetProps<ResponseData> {
  queryKeys: QueryKey;
  url: string;
  params?: { [key: string]: string | number | undefined };
  headers?: { [key: string]: string | number | undefined };
  queryOptions?: UseQueryOptions<ResponseData>;
}

export function useQueryGet<ResponseData>({
  queryKeys,
  url,
  params,
  headers,
  queryOptions,
}: QueryGetProps<ResponseData>) {
  const queryResponse = useQuery(
    queryKeys,
    async () => {
      const { data } = await api.get<ResponseData>(url, {
        params,
        headers,
      });
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      ...queryOptions,
    }
  );

  return queryResponse;
}
