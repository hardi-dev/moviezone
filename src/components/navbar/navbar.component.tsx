import { FC } from "react";
import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import { Search, Container } from "@comps";
import Link from "next/link";

interface INavbarProps {
  withSearch?: boolean;
  keyword?: string;
  onClear?: () => void;
  onChange?: (keyword: string) => void;
}

const Navbar: FC<INavbarProps> = ({
  withSearch = false,
  keyword,
  onClear,
  onChange,
}) => {
  const handleOnClear = () => {
    onClear && onClear();
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
                onClear={handleOnClear}
              />
            )}
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
