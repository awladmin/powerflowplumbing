'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import { ChevronRight, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { siteContent } from '@/content/siteContent';
import { cn } from '@/lib/utils';

interface Testimonial19Props {
  className?: string;
}

const avatarPool = [
  '/action/ev-point.jpg',
  '/action/outdoor-lighting.jpg',
  '/action/kitchen.jpg',
  '/action/tool-box.jpg',
  '/action/led-lighting.jpg',
  '/action/ev-point.jpg',
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonial19({ className }: Testimonial19Props) {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    }),
  );

  return (
    <section className={cn('section-padding !pb-10', className)}>
      <div className="container flex flex-col items-center gap-4">
        <div className="flex items-center gap-1 text-sm font-semibold">
          <Zap className="h-5 w-auto fill-[#dd702c] text-[#dd702c]" />
          Rated 5 stars by local customers
        </div>
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">Recent customer feedback</h2>
        <p className="text-muted-foreground text-center lg:text-lg">
          Real comments from homeowners, landlords, and small business clients we support.
        </p>
        <Link href="/projects" className="flex items-center gap-1 font-semibold">
          View our recent work
          <ChevronRight className="mt-0.5 h-4 w-auto" />
        </Link>
      </div>
      <div className="lg:container">
        <div className="mt-12 space-y-4">
          <Carousel
            opts={{ loop: true }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:z-10 before:w-20 before:bg-linear-to-r before:from-background before:to-transparent after:absolute after:top-0 after:right-0 after:bottom-0 after:z-10 after:w-20 after:bg-linear-to-l after:from-background after:to-transparent md:before:w-28 md:after:w-28"
          >
            <CarouselContent>
              {siteContent.testimonials.map((testimonial, index) => (
                <CarouselItem key={`${testimonial.author}-${index}`} className="basis-auto pl-4">
                  <Card className="max-w-[24rem] p-6 select-none">
                    <div className="flex justify-between gap-3">
                      <div className="mb-4 flex min-w-0 gap-4">
                        <Avatar className="size-14 rounded-full ring-1 ring-input">
                          <AvatarImage src={avatarPool[index % avatarPool.length]} alt={testimonial.author} />
                          <AvatarFallback>{getInitials(testimonial.author)}</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="truncate font-medium">{testimonial.author}</p>
                          <p className="text-muted-foreground truncate text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </div>
                    <q className="text-muted-foreground leading-7">{testimonial.quote}</q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
