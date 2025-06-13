import { ReactNode } from "react";
import colors from "../../theme/colors";
import typograph from "../../theme/typography";
import { StyleProp, TextStyle } from "react-native";

export type TextProps = {
  children: ReactNode;
  type: keyof typeof typograph.type;
  size: keyof typeof typograph.size;
  color?: keyof typeof colors;
  center?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};
