import { FC } from "react";
import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

const Container: FC<ContainerProps> = (props) => (
  <ChakraContainer
    {...props}
    minW={{
      base: "100%",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
    }}
  />
);

export default Container;
