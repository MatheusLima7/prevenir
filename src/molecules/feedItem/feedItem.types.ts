import { ImageSourcePropType } from "react-native";
import { StringLiteral } from "typescript";

export type FeedItemProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  date: StringLiteral;
  id: string;
};
