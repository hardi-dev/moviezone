export interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ISearchResult {
  Search: ISearch[];
  totalResults: string;
  Response: string;
}
