import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { API } from "@libs/api/helper";
import { IMovie } from "@interfaces";
import { IMovieParams } from "@libs/api/types";

const fetchMovie = async (params: IMovieParams) => {
  const { request } = API();
  const { data }: { data: IMovie } = await request.get("", {
    params,
  });
  return data;
};

const useMovie = (params: IMovieParams) => {
  return useQuery<IMovie, AxiosError<Error>>(["movie", params], (args) =>
    fetchMovie(params)
  );
};

export { fetchMovie, useMovie };
