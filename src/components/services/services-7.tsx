'use client';

import {
  Bolt,
  Car,
  ClipboardCheck,
  House,
  Lightbulb,
  Shield,
  Siren,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { siteContent } from '@/content/siteContent';
import { cn } from '@/lib/utils';

interface Services7Props {
  className?: string;
}

const serviceIcons = [
  Shield,
  House,
  Lightbulb,
  Wrench,
  Car,
  Bolt,
  ClipboardCheck,
  Shield,
  House,
  Siren,
];

const Services7 = ({ className }: Services7Props) => {
  return (
    <section className={cn('section-padding', className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-14">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Domestic and commercial electrical services done properly
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-base md:text-lg">
              {siteContent.services.intro}
            </p>
          </div>

          <div className="space-y-5">
            {siteContent.services.list.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.slug}
                  className="flex flex-col items-start gap-6 rounded-lg border border-border p-6 transition-shadow hover:shadow-sm md:flex-row"
                >
                  <div className="flex shrink-0 items-center justify-center rounded-lg bg-muted p-3">
                    <Icon className="h-6 w-6 text-[#dd702c]" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" className="mt-2" asChild>
                      <Link href="/contact">Enquire about this service</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services7 };
