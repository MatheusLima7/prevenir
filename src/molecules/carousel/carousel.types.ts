import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export type CarouselItemProps = {
  title: string;
  image: ImageSourcePropType;
  Content: () => ReactNode;
};

export type CustomCarouselProps = {
  items: CarouselItemProps[];
};
