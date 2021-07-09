import { FC, useRef } from "react";
import {
  Box,
  Input,
  IconButton,
  BoxProps,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";

type TSearchVariant = "default" | "boxed";

interface ISearchProps extends Omit<BoxProps, "onChange" | "onClick"> {
  value?: string;
  variant?: TSearchVariant;
  placeholder?: string;
  onChange?: (val: string) => void;
  onClear?: () => void;
}

const Search: FC<ISearchProps> = ({
  value,
  placeholder = "Temukan Film Favoritmu",
  onChange,
  onClear,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (val: string) => {
    onChange && onChange(val);
  };

  const handlleOnClear = () => {
    onClear && onClear();
  };

  return (
    <Box {...restProps}>
      <InputGroup>
        <Input
          ref={inputRef}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder={placeholder}
          border="none"
          bgColor="gray.100"
          pr="2.6rem"
          value={value}
        />
        <InputRightElement width="2.6rem">
          {typeof value !== "undefined" && value.length > 0 && (
            <IconButton
              aria-label="Search Film"
              onClick={handlleOnClear}
              borderRadius="4"
              size="sm"
            >
              <CloseIcon color="gray.400" />
            </IconButton>
          )}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Search;
