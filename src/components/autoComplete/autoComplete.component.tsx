import { FC } from "react";
import { Box, Flex, Text, Badge, BoxProps } from "@chakra-ui/react";
import { ISearch } from "@interfaces";
import { TypeBadge } from "@comps";
import Link from "next/link";

interface IAutoCompleteProps extends BoxProps {
  data: ISearch[];
  total: number;
}

const AutoComplete: FC<IAutoCompleteProps> = ({
  data,
  total,
  ...restProps
}) => {
  return (
    <Box bg="white" boxShadow="md" borderRadius="8" p="4" {...restProps}>
      {data.length > 0 ? (
        <>
          <Flex flexDirection="column">
            {data.slice(0, 5).map(({ imdbID, Type, Title }) => (
              <Link href={`details/${imdbID}`} key={imdbID} passHref>
                <Box as="a">
                  <Flex
                    alignItems="center"
                    p="2"
                    borderRadius="4"
                    _hover={{
                      backgroundColor: "gray.200",
                    }}
                  >
                    <TypeBadge mr="4" type={Type} />
                    <Text>{Title}</Text>
                  </Flex>
                </Box>
              </Link>
            ))}
          </Flex>
          {total > 0 && (
            <Link href="/results" passHref>
              <Text
                p="2"
                fontSize="sm"
                color="gray.500"
                as="a"
                display="block"
                mt="4"
              >
                Lihat semua dari {total} hasil
              </Text>
            </Link>
          )}
        </>
      ) : (
        <Flex justify="center" align="center">
          <Text>Hasil Pencarian Tidak di Temukan</Text>
        </Flex>
      )}
    </Box>
  );
};

export default AutoComplete;
