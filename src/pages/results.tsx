import { Results } from "@containers";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchMovies } from "@libs/api/hooks";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("movies", fetchMovies);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Results;
