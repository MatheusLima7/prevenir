import { ImageSourcePropType } from "react-native";
import { TypeAvatarProps } from "../avatar/avatar.types";

export type SupporterAvatarProps = {
  currentImage?: ImageSourcePropType | null | string;
  type?: TypeAvatarProps;
};
