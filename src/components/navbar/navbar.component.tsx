import { FC } from "react";
import { Box, Image, Container, Grid, GridItem } from "@chakra-ui/react";
import { Search } from "@comps";
import Link from "next/link";

interface INavbarProps {
  withSearch?: boolean;
}

const Navbar: FC<INavbarProps> = ({ withSearch = false }) => {
  return (
    <Box
      width="100%"
      bgColor="white"
      boxShadow="0px 4px 40px rgba(0, 0, 0, 0.03)"
    >
      <Container minWidth="container.xl">
        <Grid templateColumns="1fr 3fr 1fr" alignItems="center" height="72px">
          <GridItem>
            <Link href="/" passHref>
              <Box as="a">
                <Image src="/logo.svg" alt="moviezone" maxH="38px" />
              </Box>
            </Link>
          </GridItem>
          <GridItem>
            {withSearch && (
              <Search
                width="60%"
                onChange={(val) => console.log("val", val)}
                onClick={(val) => console.log("vaa", val)}
              />
            )}
          </GridItem>
          <GridItem>Menu</GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
