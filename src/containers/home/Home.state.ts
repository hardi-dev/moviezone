import { useState, useEffect } from "react";
import { useMovies } from "@libs/api/hooks";
import { useAppDispatch, useAppSelector } from "@store";
import { useDebounce } from "@src/libs/customHooks";

export const useHomeState = () => {
  const dispatch = useAppDispatch();
  const { keyword } = useAppSelector((state) => state.search);
  const douncedKeyword = useDebounce(keyword);
  const [typing, setIstyping] = useState(false);

  const { data, status, hasNextPage, fetchNextPage } = useMovies({
    s: douncedKeyword,
  });

  useEffect(() => {
    setIstyping(
      douncedKeyword !== null &&
        typeof douncedKeyword !== "undefined" &&
        douncedKeyword.length > 3
    );
  }, [douncedKeyword]);

  const handleOnSearch = (keyword?: string) => {
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
    typing,
    keyword: douncedKeyword,
  };
};
