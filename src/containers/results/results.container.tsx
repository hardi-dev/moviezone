import { FC, Fragment } from "react";
import {
  Navbar,
  Layout,
  Search,
  AutoComplete,
  CardMovie,
  Container,
  Spinner,
  Empty,
} from "@comps";
import { Grid, Box, Flex, Text } from "@chakra-ui/react";
import { useSearchResults } from "./result.state";
import Link from "next/link";

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
        <Spinner loading={status === "loading"} />

        <Empty
          isEmpty={status === "success" && data?.pages[0].Response === "False"}
        />

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
                  <Link key={imdbID} href={`/details/${imdbID}`} passHref>
                    <Box as="a">
                      <CardMovie
                        title={Title}
                        year={Year}
                        type={Type}
                        cover={Poster}
                      />
                    </Box>
                  </Link>
                ))}
              </Fragment>
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default SerachResults;
