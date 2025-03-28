"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import ItemCard from "@/components/ui/item-card";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LandingCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={false}
      infinite={true}
    >
      <div>
        <ItemCard name="Mojito" img="/mojito-image.jpeg" />
      </div>
      <div>
        <ItemCard name="Mojito2" img="/mojito-image.jpeg" />
      </div>
      <div>
        <ItemCard name="Mojito3" img="/mojito-image.jpeg" />
      </div>
    </Carousel>
  );
};

export default LandingCarousel;
