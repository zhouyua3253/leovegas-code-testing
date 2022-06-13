export interface Pagination<T> {
  page: number;
  total_results: number;
  total_pages: number;

  results: Array<T>;
}
