import { MovieDetail } from "@containers";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchMovie } from "@libs/api/hooks";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("movie", () =>
    fetchMovie({ i: String(query.id) })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MovieDetail;
