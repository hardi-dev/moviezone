import { FC } from "react";
import { Flex, Text, FlexProps } from "@chakra-ui/react";

interface IEmptyProps extends FlexProps {
  isEmpty: boolean;
  inverted?: boolean;
}

const Empty: FC<IEmptyProps> = ({ isEmpty, inverted, ...restProps }) => {
  if (!isEmpty) return null;

  return (
    <Flex justifyContent="center" align="center" height="60vh" {...restProps}>
      <Text color={inverted ? "white" : "black"}>Tidak ada hasil</Text>
    </Flex>
  );
};

export default Empty;
