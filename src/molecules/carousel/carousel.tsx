import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { useState } from "react";
import { CustomCarouselProps } from "./carousel.types";
import CarouselItem from "@src/atoms/carouselItem";
import { styles } from "./carousel.styles";

const { width } = Dimensions.get("window");

export default function CustomCarousel({ items }: CustomCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const count = items?.length;

  return (
    <>
      <Carousel
        data={items}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} />
        )}
        sliderWidth={width - 60}
        itemWidth={width - 60}
        vertical={false}
        onSnapToItem={setActiveSlide}
      />

      {!!count && (
        <Pagination
          dotsLength={count}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      )}
    </>
  );
}
