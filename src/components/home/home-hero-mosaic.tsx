'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';
import { cn } from '@/lib/utils';

interface HomeHeroMosaicProps {
  className?: string;
}

const offsets = [0, 2, 4, 6];

export default function HomeHeroMosaic({ className }: HomeHeroMosaicProps) {
  const rotatedImageColumns = offsets.map((offset) =>
    siteImages.heroCarousel.slice(offset).concat(siteImages.heroCarousel.slice(0, offset)),
  );

  return (
    <section className={cn('section-padding bg-gradient-to-br from-background via-muted/30 to-background', className)}>
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_40%)]" />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
              <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
                {siteContent.home.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-bold text-balance md:text-5xl">
                {siteContent.home.hero.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                {siteContent.home.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-amber-500 text-slate-950 hover:bg-amber-400">
                  <Link href={siteContent.home.hero.primaryCta.href}>{siteContent.home.hero.primaryCta.label}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-200/30 bg-transparent text-white hover:bg-white/10">
                  <Link href={siteContent.home.hero.secondaryCta.href}>
                    {siteContent.home.hero.secondaryCta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <a href={siteContent.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-amber-100">
                <Phone className="size-4" />
                {siteContent.home.hero.callout}
              </a>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {siteContent.home.hero.stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/15 bg-white/5 px-3 py-2">
                    <p className="text-xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {siteContent.trustPoints.slice(0, 4).map((point) => (
                  <div key={point} className="inline-flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="size-4 text-amber-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 z-10 hidden w-24 bg-linear-to-r from-slate-950 to-transparent lg:block" />

              <div className="hidden h-full items-center gap-3 pr-4 lg:flex">
                {rotatedImageColumns.map((column, index) => (
                  <Carousel
                    key={`hero-column-${index}`}
                    orientation="vertical"
                    opts={{ loop: true, align: 'center' }}
                    plugins={[
                      AutoScroll({
                        speed: 0.55,
                        direction: index % 2 === 0 ? 'forward' : 'backward',
                        startDelay: 0,
                      }),
                    ]}
                    className="rotate-[5deg]"
                  >
                    <CarouselContent className="max-h-[42rem]">
                      {column.map((image, imageIndex) => (
                        <CarouselItem key={`hero-image-col-${index}-${imageIndex}`} className="pt-3">
                          <div className="relative h-44 w-36 overflow-hidden rounded-xl border border-white/15 bg-slate-900">
                            <ImageWithFallback
                              src={image.src}
                              fallbackSrc={image.fallback}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="144px"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ))}
              </div>

              <div className="space-y-2 px-3 py-4 lg:hidden">
                {[0, 1].map((row) => (
                  <Carousel
                    key={`hero-row-${row}`}
                    opts={{ loop: true, align: 'start' }}
                    plugins={[
                      AutoScroll({
                        speed: 0.7,
                        direction: row % 2 === 0 ? 'forward' : 'backward',
                        startDelay: 0,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {siteImages.heroCarousel.map((image, index) => (
                        <CarouselItem
                          key={`hero-mobile-image-${row}-${index}`}
                          className="basis-[10.25rem] pl-2"
                        >
                          <div className="relative h-32 overflow-hidden rounded-lg border border-white/15 bg-slate-900">
                            <ImageWithFallback
                              src={image.src}
                              fallbackSrc={image.fallback}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="164px"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
