import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export type TypeAvatarProps = "big" | "small";

export type AvatarProps = {
  image: ImageSourcePropType | string;
  type?: TypeAvatarProps;
  style?: StyleProp<ImageStyle>;
};
