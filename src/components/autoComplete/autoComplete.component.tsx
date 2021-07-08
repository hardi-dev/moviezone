import { FC } from "react";
import { Box, Flex, Text, Badge, Spinner } from "@chakra-ui/react";
import { ISearch } from "@interfaces";

interface IAutoCompleteProps {
  data: ISearch[];
  loading: boolean;
}

const AutoComplete: FC<IAutoCompleteProps> = ({ data, loading }) => {
  return (
    <Box boxShadow="0px 4px 40px rgba(0, 0, 0, 0.03);" borderRadius="8" p="4">
      {data.length > 0 && (
        <Flex>
          {data.map(({ imdbID, Type, Title }, idx) => (
            <Box key={imdbID}>
              <Badge>{Type}</Badge>
              <Text>{}</Text>
            </Box>
          ))}
        </Flex>
      )}

      {loading ? (
        <Flex justify="center" align="center">
          <Spinner />
        </Flex>
      ) : (
        data.length === 0 && (
          <Flex justify="center" align="center">
            <Text>Hasil Pencarian Tidak di Temukan</Text>
          </Flex>
        )
      )}
    </Box>
  );
};

export default AutoComplete;
