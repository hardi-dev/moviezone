import { FC } from "react";
import { Navbar, Layout, Search } from "@comps";
import { useEffect } from "react";
import { useMovies } from "@libs/api/hooks";
import { Flex, Box, Container } from "@chakra-ui/react";

const Home: FC = () => {
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
          />
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
