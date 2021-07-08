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

const useMovies = ({ pageParam = 1, ...restParam }: ISearchParams) => {
  return useInfiniteQuery<ISearchResult, AxiosError<Error>>(
    ["movies", { pageParam, ...restParam }],
    ({ pageParam = 1 }) => fetchMovies({ ...restParam, pageParam }),
    {
      enabled:
        typeof restParam.s !== "undefined" &&
        restParam.s !== null &&
        restParam.s.length > 0,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.Response === "False") return;

        return allPages.map((items) => [...items.Search]).flat().length <
          parseInt(lastPage.totalResults)
          ? pageParam + 1
          : undefined;
      },
    }
  );
};

export { fetchMovies, useMovies };
