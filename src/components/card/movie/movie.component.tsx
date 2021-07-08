import { FC } from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  BoxProps,
  AspectRatio,
  AspectRatioProps,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { TypeBadge } from "@comps";

interface ICardMovieProps extends AspectRatioProps {
  title: string;
  type: string;
  year: string;
  cover: string;
}

const CardMovie: FC<ICardMovieProps> = ({
  title,
  type,
  year,
  cover,
  ratio = 3 / 4,
  maxW = 300,
  ...restPorps
}) => {
  return (
    <AspectRatio
      ratio={ratio}
      maxW={maxW}
      pos="relative"
      overflow="hidden"
      borderRadius="16"
      {...restPorps}
    >
      <Box width="100%" height="100%">
        <Image src={cover} alt={title} width="100%" />
        <Flex
          position="absolute"
          left="0px"
          top="0px"
          right="0px"
          bottom="0px"
          flexDirection="column"
          _after={{
            content: '""',
            position: "absolute",
            display: "block",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 24.55%, #000000 114.77%)",
            width: "100%",
            height: "100%",
            zIndex: "0",
          }}
        >
          <VStack mt="auto" p="4" zIndex="2">
            <Heading as="h2" size="md" textAlign="center" color="white">
              {title}
            </Heading>
            <Text textAlign="center" size="sm" color="white">
              {year}
            </Text>
          </VStack>
        </Flex>
      </Box>
    </AspectRatio>
  );
};

export default CardMovie;
