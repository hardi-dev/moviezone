import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { ISearchResult } from "@interfaces";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchMovies, useMovies } from "@libs/api/hooks";
import { ISearchParams } from "@libs/api/types";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const { data, isSuccess, hasNextPage } = useMovies({
    s: "Batman",
    pageParam: 1,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
      console.log("hasNextPage", hasNextPage);
    }
  }, [isSuccess, data, hasNextPage]);

  return <div>home</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  const params: ISearchParams = {
    s: "Batman",
    pageParam: 1,
  };
  await queryClient.prefetchQuery("movies", () => fetchMovies(params));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
