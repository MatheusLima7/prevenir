import { CarouselItemProps } from "@src/molecules/carousel/carousel.types";

import { Image } from "react-native";
import { ImageContent, Title } from "./carouselItem.styles";

const CarouselItem = ({
  item,
  index,
}: {
  item: CarouselItemProps;
  index: number;
}) => {
  const { Content } = item;

  return (
    <>
      <ImageContent key={index}>
        {item.image !== null && <Image source={item.image} />}
      </ImageContent>
      <Title>{item.title}</Title>
      {<Content />}
    </>
  );
};

export default CarouselItem;
