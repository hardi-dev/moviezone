import { FC } from "react";
import { Navbar, Layout, Search, AutoComplete } from "@comps";
import { Flex, Container, Box } from "@chakra-ui/react";

const MovieDetail: FC = () => {
  return (
    <Layout navbar={<Navbar />}>
      <Container minW="container.lg">Ini Detail Movie</Container>
    </Layout>
  );
};

export default MovieDetail;
