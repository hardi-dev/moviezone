import { FC } from "react";
import { Text, Badge, BadgeProps } from "@chakra-ui/react";

interface ITypeBadgeProps extends BadgeProps {
  type: string;
}

const TypeBadge: FC<ITypeBadgeProps> = ({
  type,
  colorScheme,
  ...restPorps
}) => {
  const bg = (type: string): typeof colorScheme => {
    switch (type) {
      case "movie":
        return "red";
      case "series":
        return "yellow";
      default:
        return "green";
    }
  };

  return (
    <Badge colorScheme={bg(type)} {...restPorps}>
      {type}
    </Badge>
  );
};

export default TypeBadge;
