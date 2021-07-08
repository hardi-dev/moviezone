import { FC } from "react";
import { Box } from "@chakra-ui/react";

interface ILayoutProps {
  navbar?: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ navbar, children }) => {
  return (
    <Box bg="white" width="100%" minH="100vh">
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
