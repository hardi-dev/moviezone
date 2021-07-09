import { FC } from "react";
import { Flex, Spinner as CSpinner, FlexProps } from "@chakra-ui/react";

interface ISpinner extends FlexProps {
  loading: boolean;
  inverted?: boolean;
}

const Spinner: FC<ISpinner> = ({ loading, inverted, ...restProps }) => {
  if (!loading) return null;

  return (
    <Flex justifyContent="center" align="center" height="60vh" {...restProps}>
      <CSpinner colorScheme={inverted ? "white" : "blackAlpha"} />
    </Flex>
  );
};

export default Spinner;
