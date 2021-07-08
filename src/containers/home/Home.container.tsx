import { Navbar, Layout, Search } from "@comps";
import { useEffect, FC } from "react";
import { useMovies } from "@libs/api/hooks";
import { Flex, Box, Container } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@store";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { keyword } = useAppSelector((state) => state.search);

  const { data, isSuccess, hasNextPage } = useMovies({
    s: "Batman",
    pageParam: 1,
  });

  useEffect(() => {
    console.log("keywor", keyword);
  }, [keyword]);

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
      console.log("hasNextPage", hasNextPage);
    }
  }, [isSuccess, data, hasNextPage]);

  const handleOnSearch = (keyword?: string) => {
    if (typeof keyword !== "undefined") {
      dispatch({ type: "SET_KEYWORD", payload: keyword });
    }
  };

  return (
    <Layout navbar={<Navbar />}>
      <Container minW="container.lg">
        <Flex minH="100vh" justifyContent="center" alignItems="center">
          <Search
            width={{ sm: "80%", lg: "50%" }}
            boxShadow="md"
            p="4"
            bgColor="white"
            borderRadius="8"
            onClick={(val) => handleOnSearch(val as string)}
          />
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
