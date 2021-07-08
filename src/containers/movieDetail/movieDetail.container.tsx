import { FC } from "react";
import { Navbar, Layout, Empty, Spinner, Container } from "@comps";
import {
  Flex,
  Box,
  Image,
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useMovieDetail } from "./movieDetail.state";

const MovieDetail: FC = () => {
  const { data, status } = useMovieDetail();

  return (
    <Layout navbar={<Navbar />}>
      <Spinner loading={status === "loading"} />
      <Empty isEmpty={status === "success" && data?.Response === "False"} />

      {status === "success" &&
        typeof data !== "undefined" &&
        data.Response === "True" && (
          <>
            <Box width="100%" pos="absolute">
              <Box
                width="100%"
                height={{ sm: "50vh", md: "30vh", lg: "35vw" }}
                overflow="hidden"
              >
                <Box
                  width="100%"
                  height="100%"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    display: "block",
                    background: "black",
                    opacity: "0.6",
                    width: "100%",
                    height: "100%",
                    zIndex: "0",
                    top: "0px",
                  }}
                >
                  <Image
                    fallbackSrc="/fallback.svg"
                    src={data.Poster}
                    alt={data.Title}
                    width="100%"
                    filter="blur(10px)"
                    transform="translateY(-5vw) scale(1.1)"
                  />
                </Box>
              </Box>
            </Box>
            <Container mt="20" position="relative">
              <Grid
                gap="20"
                templateColumns={{
                  base: "1fr",
                  md: "repeat(2, 1fr)",
                  lg: "1fr 2fr",
                }}
              >
                <GridItem>
                  <AspectRatio
                    ratio={3 / 4}
                    overflow="hidden"
                    borderRadius="16"
                  >
                    <Image
                      src={data.Poster}
                      alt={data.Title}
                      width="100%"
                      fallbackSrc="/fallback.svg"
                    />
                  </AspectRatio>
                </GridItem>
                <GridItem>
                  <Heading mt="10" as="h1" color="white" fontSize="4xl">
                    {data.Title}
                  </Heading>
                  <Grid
                    mt="10"
                    gap="5"
                    templateColumns={{
                      base: "1fr",
                      lg: "repeat(2, 1fr)",
                    }}
                  >
                    <GridItem>
                      <Heading as="h4" fontSize="2xl" color="white" mb="2">
                        Plot
                      </Heading>
                      <Text color="white">{data.Plot}</Text>

                      <Heading
                        as="h4"
                        fontSize="2xl"
                        color="white"
                        mb="2"
                        mt="4"
                      >
                        Genre
                      </Heading>
                      <Flex>
                        {data.Genre.split(",").map((item) => (
                          <Badge key={item} colorScheme="yellow" mr="2">
                            {item}
                          </Badge>
                        ))}
                      </Flex>
                    </GridItem>
                    <GridItem></GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </Container>
          </>
        )}
    </Layout>
  );
};

export default MovieDetail;
