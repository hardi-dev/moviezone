import { useState, useEffect } from "react";
import { useMovies } from "@libs/api/hooks";
import { useAppDispatch, useAppSelector } from "@store";
import { useDebounce, useInfiniteScroll } from "@src/libs/customHooks";

export const useSearchResults = () => {
  const dispatch = useAppDispatch();
  const { keyword } = useAppSelector((state) => state.search);

  const douncedKeyword = useDebounce(keyword);

  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useMovies({
      s: douncedKeyword,
    });

  useInfiniteScroll(!isFetchingNextPage && hasNextPage, fetchNextPage);

  const handleOnSearch = (keyword?: string) => {
    if (typeof keyword !== "undefined") {
      dispatch({ type: "SET_KEYWORD", payload: keyword });
    }
  };

  const handleOnChange = (keyword?: string) => {
    if (typeof keyword !== "undefined") {
      dispatch({ type: "SET_KEYWORD", payload: keyword });
    }
  };

  return {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    handleOnSearch,
    keyword,
    handleOnChange,
  };
};
