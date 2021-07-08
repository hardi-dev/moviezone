export interface IRequestHeaders {
  accept: string;
  Authorization?: string;
  "Content-Type"?: string;
}

export interface ISearchParams {
  s: string;
  pageParam: number;
}
