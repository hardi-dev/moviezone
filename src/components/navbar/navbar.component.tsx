import { FC } from "react";
import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import { Search, Container } from "@comps";
import Link from "next/link";

interface INavbarProps {
  withSearch?: boolean;
  keyword?: string;
  onSearch?: (keyword: string) => void;
  onChange?: (keyword: string) => void;
}

const Navbar: FC<INavbarProps> = ({
  withSearch = false,
  keyword,
  onSearch,
  onChange,
}) => {
  const handleOnSearch = (val: string) => {
    onSearch && onSearch(val as string);
  };
  const handleOnchange = (val: string) => {
    onChange && onChange(val as string);
  };

  return (
    <Box width="100%" bgColor="white" boxShadow="md">
      <Container>
        <Grid
          templateColumns={{ base: "1fr 2fr 1fr", lg: "1fr 3fr 1fr" }}
          alignItems="center"
          height="72px"
        >
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
                width={{ base: "90%", lg: "60%" }}
                m={{ sm: "0 auto", lg: "0px" }}
                value={keyword}
                onChange={(val) => handleOnchange(val as string)}
                onClick={(val) => handleOnSearch(val as string)}
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
