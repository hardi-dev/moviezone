import { useInfiniteQuery } from "react-query";
import { AxiosError } from "axios";
import { API } from "@libs/api/helper";
import { ISearchResult } from "@interfaces";
import { ISearchParams } from "@libs/api/types";

const fetchMovies = async ({ pageParam = 1, s }: ISearchParams) => {
  const { request } = API();
  const { data }: { data: ISearchResult } = await request.get("", {
    params: { s, page: pageParam },
  });
  return data;
};

const useMovies = (params: ISearchParams) => {
  return useInfiniteQuery<ISearchResult, AxiosError<Error>>(
    ["movies", params],
    ({ pageParam = 1 }) => fetchMovies({ ...params, pageParam }),
    {
      enabled: params.s.length > 3,
      getNextPageParam: (lastPage, allPages) =>
        allPages.map((items) => [...items.Search]).flat().length <
        parseInt(lastPage.totalResults)
          ? params.pageParam + 1
          : undefined,
    }
  );
};

export { fetchMovies, useMovies };
