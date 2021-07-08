import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type TAction =
  | { type: "SET_KEYWORD"; payload: string }
  | { type: "RESET_KEYWORD" };

interface SearchState {
  keyword: string;
}

const initialState: SearchState = {
  keyword: "",
};

const searchReducer = (state: SearchState = initialState, action: TAction) => {
  switch (action.type) {
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    case "RESET_KEYWORD":
      return { ...state, keyword: "" };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
