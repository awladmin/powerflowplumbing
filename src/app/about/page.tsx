import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Power Trip Electrical, our values, and how we deliver safe, tidy, reliable electrical work for homes and businesses.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Power Trip Electrical',
    description:
      'Learn more about Power Trip Electrical, our values, and how we deliver safe, tidy, reliable electrical work for homes and businesses.',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col items-start justify-start gap-6 lg:flex-row">
            <div className="flex w-full flex-col items-start justify-start gap-14 lg:w-1/2 lg:gap-20">
              <div className="pr-4 lg:pr-10">
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:mb-8 lg:text-6xl">About Us</h1>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed lg:text-lg">
                  {siteContent.about.hero.description}
                </p>
                <p className="text-muted-foreground lg:text-lg">
                  We work with homeowners, landlords, and small businesses that want electrical work done safely,
                  clearly, and without unnecessary hassle.
                </p>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
                <ImageWithFallback
                  src="/action/worker-facing-camera.jpg"
                  fallbackSrc="/images/placeholders/about-team.svg"
                  alt="Electrician speaking with customer on site"
                  width={700}
                  height={1000}
                  className="aspect-[0.72] w-full rounded-lg border object-cover md:w-1/2"
                />
                <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                  <ImageWithFallback
                    src="/action/worker-on-board.jpg"
                    fallbackSrc="/images/placeholders/project-02.svg"
                    alt="Electrician working on control board"
                    width={700}
                    height={760}
                    className="aspect-[1.1] rounded-lg border object-cover"
                  />
                  <ImageWithFallback
                    src="/action/worked-internals.jpg"
                    fallbackSrc="/images/placeholders/project-01.svg"
                    alt="Internal electrical installation in progress"
                    width={700}
                    height={1000}
                    className="aspect-[0.72] rounded-lg border object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-12 pt-10 lg:w-1/2 lg:pt-40">
              <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
                <ImageWithFallback
                  src="/action/small-office.jpg"
                  fallbackSrc="/images/placeholders/project-05.svg"
                  alt="Small office fit-out electrical work"
                  width={700}
                  height={820}
                  className="aspect-[0.9] w-full rounded-lg border object-cover md:w-1/2"
                />
                <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                  <ImageWithFallback
                    src="/action/landlord.jpg"
                    fallbackSrc="/images/placeholders/project-06.svg"
                    alt="Landlord safety check and testing"
                    width={700}
                    height={760}
                    className="aspect-[0.8] rounded-lg border object-cover"
                  />
                  <ImageWithFallback
                    src="/action/outside-lighting.jpg"
                    fallbackSrc="/images/placeholders/project-04.svg"
                    alt="Outdoor lighting installation at dusk"
                    width={700}
                    height={820}
                    className="aspect-[0.9] rounded-lg border object-cover"
                  />
                </div>
              </div>

              <div className="px-3 md:px-8">
                <h2 className="mb-6 text-2xl font-semibold">How We Work</h2>
                <p className="mb-6 text-base leading-relaxed lg:text-lg">
                  {siteContent.about.howWeWork[0].title}, {siteContent.about.howWeWork[1].title.toLowerCase()}, and
                  clear scheduling before we start. Then we complete installation or repairs safely, test thoroughly,
                  and hand over cleanly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You will always know what is happening on your job. We explain options in plain English, respect your
                  property, and keep communication consistent from first enquiry to final sign-off.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
