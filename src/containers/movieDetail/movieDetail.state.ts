import { useMovie } from "@libs/api/hooks";
import { useRouter } from "next/router";

export const useMovieDetail = () => {
  const router = useRouter();

  const { data, status } = useMovie({
    i: String(router.query.id),
  });

  return {
    data,
    status,
  };
};
