export type PaginationResponse<Data> = {
  content: Data[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
};
