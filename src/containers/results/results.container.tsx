import { FC, Fragment } from "react";
import {
  Navbar,
  Layout,
  Search,
  AutoComplete,
  CardMovie,
  Container,
} from "@comps";
import { Grid, GridItem, Flex, Spinner, Text } from "@chakra-ui/react";
import { useSearchResults } from "./result.state";

const SerachResults: FC = () => {
  const { keyword, status, data, handleOnSearch } = useSearchResults();

  return (
    <Layout
      navbar={
        <Navbar
          withSearch
          keyword={keyword}
          onSearch={(val) => handleOnSearch(val)}
        />
      }
    >
      <Container mt="10">
        {status === "success" && data?.pages[0].Response === "False" && (
          <Flex justifyContent="center" align="center" height="100vh">
            <Text>Tidak ada hasil</Text>
          </Flex>
        )}

        {status === "success" && data?.pages[0].Response === "True" && (
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="2rem"
          >
            {data.pages.map((page, idx) => (
              <Fragment key={idx}>
                {page.Search.map(({ Title, Year, Type, imdbID, Poster }) => (
                  <CardMovie
                    key={imdbID}
                    title={Title}
                    year={Year}
                    type={Type}
                    cover={Poster}
                  />
                ))}
              </Fragment>
            ))}
          </Grid>
        )}

        {status === "loading" && (
          <Flex justifyContent="center" align="center" height="100vh">
            <Spinner />
          </Flex>
        )}
      </Container>
    </Layout>
  );
};

export default SerachResults;
