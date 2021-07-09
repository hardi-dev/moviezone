import { FC } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface ILayoutProps extends BoxProps {
  navbar?: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({
  navbar,
  bg = "white",
  pb = "10",
  children,
  ...restProps
}) => {
  return (
    <Box bg={bg} width="100%" minH="100vh" pb={pb} {...restProps}>
      {navbar && (
        <Box pos="absolute" top="0px" left="0px" right="0px" zIndex="sticky">
          {navbar}
        </Box>
      )}
      <Box pt="72px">{children}</Box>
    </Box>
  );
};

export default Layout;
