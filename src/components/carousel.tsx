import init from "@/assets/images/init.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const CarouselBox = () => {
  const [currentSlide, setCurrentSLide] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSLide((prev) => (prev + 1) % 2);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <Carousel
      className="w-full"
    >
      <CarouselContent dir="ltr">
        <CarouselItem>
          <div className="w-full h-full overflow-hidden">
            <img src={init} alt="" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-ful h-full overflow-hidden">
            <img src={init} alt="" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
export default CarouselBox;
