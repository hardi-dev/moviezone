import { FC, ComponentProps, useRef } from "react";
import {
  Box,
  Input,
  IconButton,
  BoxProps,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

type TSearchVal = string | number;

type TSearchVariant = "default" | "boxed";

interface ISearchProps
  extends Pick<
    BoxProps,
    "width" | "boxShadow" | "bgColor" | "p" | "borderRadius"
  > {
  value?: TSearchVal;
  variant?: TSearchVariant;
  placeholder?: string;
  onChange?: (val: TSearchVal) => void;
  onClick?: (val?: TSearchVal) => void;
}

const Search: FC<ISearchProps> = ({
  value,
  placeholder = "Temukan Film Favoritmu",
  onChange,
  onClick,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (val: TSearchVal) => {
    onChange && onChange(val);
  };

  const handleOnClick = (val?: TSearchVal) => {
    onClick && onClick(val);
  };

  return (
    <Box {...restProps}>
      {/* <Flex
        alignItems="center"
        bgColor="gray.100"
        borderRadius="8"
        pl="4"
        pr="1"
        py="1"
      > */}
      <InputGroup>
        <Input
          ref={inputRef}
          value={value}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder={placeholder}
          border="none"
          bgColor="gray.100"
          pr="2.6rem"
        />
        <InputRightElement width="2.6rem">
          <IconButton
            aria-label="Search Film"
            onClick={() => handleOnClick(inputRef.current?.value)}
            borderRadius="4"
            size="sm"
          >
            <Search2Icon color="gray.400" />
          </IconButton>
        </InputRightElement>
      </InputGroup>
      {/* </Flex> */}
    </Box>
  );
};

export default Search;
