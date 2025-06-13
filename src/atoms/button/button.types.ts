import colors from "@src/theme/colors";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ButtonProps = {
  isAlignLeft?: boolean;
  isAlignRight?: boolean;
  children: ReactNode;
  type:
    | "outline"
    | "filled"
    | "text"
    | "gradient"
    | "greenGradient"
    | "gradientOption"
    | "gradientDanger";
  size: "small" | "medium" | "large" | "xSmall";
  onPress: () => void;
  mode?: "full" | "normal";
  endIcon?: ReactNode;
  center?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: "full" | "contain";
  color?: keyof typeof colors;
  hasGradient?: boolean;
  isGradientStyledOption?: boolean;
  disabled?: boolean;
  isShortAnswer?: boolean;
};
