import { Item } from "./styles";
import { TabBarIconProps } from "./tabBarIcon.types";
import useTabBarIcon from "./useTabBarIcon";

export const TabBarIcon = ({
  name,
  color,
  size,
  isActive,
}: TabBarIconProps) => {
  const { getIcon } = useTabBarIcon({ color, size, isActive });

  return <Item name={name}>{getIcon(name)}</Item>;
};
