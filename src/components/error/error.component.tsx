import { FC } from "react";
import { Flex, Text, FlexProps } from "@chakra-ui/react";

interface IErrorProps extends FlexProps {
  isError: boolean;
  inverted?: boolean;
}

const Error: FC<IErrorProps> = ({ isError, inverted, ...restProps }) => {
  if (!isError) return null;

  return (
    <Flex justifyContent="center" align="center" height="60vh" {...restProps}>
      <Text color={inverted ? "white" : "black"}>Opss! Terjadi Kesalahan</Text>
    </Flex>
  );
};

export default Error;
