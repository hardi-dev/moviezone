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
    setIstyping(douncedKeyword.length >= 3);
  }, [douncedKeyword]);

  useEffect(() => {
    dispatch({ type: "RESET_KEYWORD" });
  }, [dispatch]);

  const handleOnChange = (val: string) => {
    dispatch({ type: "SET_KEYWORD", payload: val });
  };

  const handleOnClear = () => {
    dispatch({ type: "RESET_KEYWORD" });
    setIstyping(false);
  };

  return {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    typing,
    keyword,
    handleOnChange,
    handleOnClear,
  };
};
