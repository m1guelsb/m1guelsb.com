import { api } from "@/services/axios";
import { PaginationResponse } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";

interface QueryPaginationProps {
  url: string;
  queryKeys: string[];
  pageLimit?: number;
  otherParams?: { [key: string]: string | undefined };
}
export const useQueryPagination = <DataType>({
  url,
  queryKeys,
  otherParams,
  pageLimit = 20,
}: QueryPaginationProps) => {
  const getData = async ({ pageParam = 0 }) => {
    const { data } = await api.get<PaginationResponse<DataType>>(url, {
      params: {
        page: pageParam,
        size: pageLimit,
        ...otherParams,
      },
    });
    return data;
  };

  const infiniteQuery = useInfiniteQuery(queryKeys, getData, {
    getNextPageParam: (lastPage) => {
      const nextOffset = lastPage.number + 1;
      return !lastPage.last ? nextOffset : undefined;
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  return infiniteQuery;
};
