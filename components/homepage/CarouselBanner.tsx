'use client';

// Autoplay can only be used on the client
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function CarouselBanner({
  images = [],
}: {
  images: { s: string; m: string }[];
}) {
  return (
    <main className="flex flex-row justify-center w-screen mt-5">
      <Carousel
        className="w-[90%]"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.m}
                alt="Banner images"
                className="hidden md:block w-full"
              />
              <img
                src={image.s}
                alt="Banner images"
                className="block md:hidden w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
