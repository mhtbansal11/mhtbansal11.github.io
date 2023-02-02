import { Box, Image } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCard = ({ images }) => {
  return (
    <Carousel
      interval={1500}
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      rounded={"lg"}
    >
      {images.map((img) => {
        return (
          <Box key={img}>
            <Image width={{ base: "100%", md: "150px" }} height={"280px"} src={img} />
          </Box>
        );
      })}
    </Carousel>
  );
};

export default CarouselCard;
