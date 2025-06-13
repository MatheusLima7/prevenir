import { ImageSourcePropType } from "react-native";
import { StringLiteral } from "typescript";

export type UnitItemProps = {
  address: string;
  date: StringLiteral;
  email: string;
  id: string;
  image: ImageSourcePropType;
  phone: string;
  title: string;
};
