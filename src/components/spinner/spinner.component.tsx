import { FC } from "react";
import { Flex, Spinner as CSpinner, FlexProps } from "@chakra-ui/react";

interface ISpinner extends FlexProps {
  loading: boolean;
}

const Spinner: FC<ISpinner> = ({ loading, ...restProps }) => {
  if (!loading) return null;

  return (
    <Flex justifyContent="center" align="center" height="60vh" {...restProps}>
      <CSpinner />
    </Flex>
  );
};

export default Spinner;
