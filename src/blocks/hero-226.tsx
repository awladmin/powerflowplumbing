'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface HeroImage {
  src: string;
  alt: string;
}

interface Hero226Props {
  headline: string;
  subheadline: string;
  cta: string;
  ctaHref?: string;
  images: HeroImage[];
}

export default function Hero226({
  headline,
  subheadline,
  cta,
  ctaHref = '/contact',
  images,
}: Hero226Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden md:h-[80vh]">
      {/* Carousel background - using img tags for reliable fill */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: 'center' }}
        className="absolute inset-0 h-full"
      >
        <CarouselContent className="h-full [&>div]:h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:mt-6 md:text-xl">
          {subheadline}
        </p>
        <Button
          size="lg"
          className="mt-8 rounded-full bg-white !pl-5.5 text-gray-900 hover:bg-white/90 before:rounded-full"
          asChild
        >
          <Link href={ctaHref}>
            {cta}
            <div className="grid size-5.5 place-items-center rounded-full border border-gray-900/10 bg-gray-900/15">
              <ChevronRight className="size-4" />
            </div>
          </Link>
        </Button>

        {/* Navigation dots */}
        <div className="mt-10 flex gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === current
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/40 hover:bg-white/60',
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
