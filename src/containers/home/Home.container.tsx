import { FC } from "react";
import { Navbar, Layout, Search, AutoComplete } from "@comps";
import { Flex, Container, Box } from "@chakra-ui/react";
import { useHomeState } from "./Home.state";

const Home: FC = () => {
  const { data, typing, keyword, handleOnChange, handleOnClear } =
    useHomeState();

  return (
    <Layout navbar={<Navbar />}>
      <Container minW="container.lg">
        <Flex minH="80vh" justifyContent="center" alignItems="center">
          <Box position="relative" width={{ sm: "80%", lg: "50%" }}>
            <Search
              width="100%"
              boxShadow="md"
              p="4"
              bgColor="white"
              borderRadius="8"
              onChange={(val) => handleOnChange(val as string)}
              value={keyword}
              onClear={handleOnClear}
            />
            {typing && (
              <AutoComplete
                data={data?.pages[0].Search || []}
                total={parseInt(data?.pages[0].totalResults || "0")}
                width="100%"
                pos="absolute"
              />
            )}
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
