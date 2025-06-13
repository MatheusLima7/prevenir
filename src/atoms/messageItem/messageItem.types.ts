import { ImageSourcePropType } from "react-native";

export type MessageItemProps = {
  message: string;
  image: ImageSourcePropType;
  isRobot: boolean;
};
