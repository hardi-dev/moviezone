import { Home } from "@containers";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchMovies } from "@libs/api/hooks";
import { ISearchParams } from "@libs/api/types";

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

export default Home;
