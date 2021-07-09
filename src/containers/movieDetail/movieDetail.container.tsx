import { FC, useRef } from "react";
import {
  Navbar,
  Layout,
  Empty,
  Spinner,
  Container,
  Error,
  TypeBadge,
} from "@comps";
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
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useMovieDetail } from "./movieDetail.state";

const MovieDetail: FC = () => {
  const { data, status } = useMovieDetail();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef<any>(null);

  return (
    <Layout bg="black" navbar={<Navbar />}>
      <Spinner loading={status === "loading"} />
      <Empty isEmpty={status === "success" && data?.Response === "False"} />
      <Error isError={status === "error"} />

      {status === "success" &&
        typeof data !== "undefined" &&
        data.Response === "True" && (
          <>
            <Box
              pos="absolute"
              width="100%"
              height="calc(100% - 73px)"
              overflow="hidden"
            >
              <Box>
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

            <Container
              mt={{ base: "10", md: "20" }}
              position="relative"
              px={{ base: "10" }}
            >
              <Grid
                gap={{ base: "10", md: "20" }}
                templateColumns={{
                  base: "1fr",
                  md: "1fr 2fr",
                }}
              >
                <GridItem>
                  <AspectRatio
                    ratio={3 / 4.5}
                    overflow="hidden"
                    borderRadius="16"
                    width={{ base: "50%", sm: "40%", md: "100%" }}
                    margin="0px auto"
                  >
                    <Image
                      src={data.Poster}
                      alt={data.Title}
                      width="100%"
                      fallbackSrc="/fallback.svg"
                      cursor="pointer"
                      onClick={onOpen}
                    />
                  </AspectRatio>
                </GridItem>
                <GridItem>
                  <TypeBadge type={data.Type} mt={{ sm: "1", md: "5" }} />
                  <Heading mt="5" as="h1" color="white" fontSize="4xl">
                    {data.Title}
                  </Heading>
                  <Text color="whiteAlpha.600" mt="2">
                    {data.Year} | {data.Runtime} | {data.Rated}
                  </Text>

                  <Text color="white" mt="10" width={{ sm: "100%", md: "70%" }}>
                    {data.Plot}
                  </Text>

                  <VStack mt="10" spacing="4" alignItems="flex-start">
                    <Grid
                      templateColumns={{
                        sm: "1fr",
                        md: "2fr 4fr",
                        lg: "1fr 5fr",
                      }}
                      alignItems="center"
                      width="100%"
                    >
                      <Text color="whiteAlpha.600">Director</Text>
                      <Text color="white">{data.Director}</Text>
                    </Grid>
                    <Grid
                      templateColumns={{
                        sm: "1fr",
                        md: "2fr 4fr",
                        lg: "1fr 5fr",
                      }}
                      alignItems="center"
                      width="100%"
                    >
                      <Text color="whiteAlpha.600">Writer</Text>
                      <Text color="white">{data.Writer}</Text>
                    </Grid>
                    <Grid
                      templateColumns={{
                        sm: "1fr",
                        md: "2fr 4fr",
                        lg: "1fr 5fr",
                      }}
                      alignItems="center"
                      width="100%"
                    >
                      <Text color="whiteAlpha.600">Actors</Text>
                      <Text color="white">{data.Actors}</Text>
                    </Grid>
                    <Grid
                      templateColumns={{
                        sm: "1fr",
                        md: "2fr 4fr",
                        lg: "1fr 5fr",
                      }}
                      alignItems="center"
                      width="100%"
                    >
                      <Text color="whiteAlpha.600">Production</Text>
                      <Text color="white">{data.Production}</Text>
                    </Grid>
                    <Grid
                      templateColumns={{
                        sm: "1fr",
                        md: "2fr 4fr",
                        lg: "1fr 5fr",
                      }}
                      alignItems="center"
                      width="100%"
                    >
                      <Text color="whiteAlpha.600">Genre</Text>
                      <Flex alignItems="center">
                        {data.Genre.split(",").map((item) => (
                          <Badge key={item} colorScheme="yellow" mr="2">
                            {item}
                          </Badge>
                        ))}
                      </Flex>
                    </Grid>
                  </VStack>
                </GridItem>
              </Grid>
            </Container>

            <Modal
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size="lg"
            >
              <ModalOverlay />
              <ModalContent>
                <AspectRatio ratio={3 / 4.5} overflow="hidden">
                  <Image
                    src={data.Poster}
                    alt={data.Title}
                    width="100%"
                    fallbackSrc="/fallback.svg"
                  />
                </AspectRatio>
              </ModalContent>
            </Modal>
          </>
        )}
    </Layout>
  );
};

export default MovieDetail;
