import {
  Bolt,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  House,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import HomeHeroMosaic from '@/components/home/home-hero-mosaic';
import Testimonial19 from '@/components/home/testimonial-19';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';

export const metadata: Metadata = {
  title: 'Power Trip Electrical | Trusted Local Electricians',
  description: siteContent.siteDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Power Trip Electrical | Trusted Local Electricians',
    description: siteContent.siteDescription,
  },
};

const serviceIcons = [
  Bolt,
  ShieldCheck,
  Building2,
  ClipboardCheck,
  House,
  Briefcase,
  Bolt,
  Phone,
];

export default function Home() {
  const featuredServices = siteContent.services.list.slice(0, 6);
  const featuredProjects = siteContent.projects.slice(0, 3);

  return (
    <>
      <HomeHeroMosaic />

      <section className="border-y bg-muted/50 py-4">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {siteContent.trustPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-sm font-medium shadow-sm"
              >
                <CheckCircle2 className="size-4 shrink-0 text-[#dd702c]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial19 />

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-14">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Electrical services built around real property needs
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
                {siteContent.services.intro}
              </p>
            </div>

            <div className="space-y-6">
              {featuredServices.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <div
                    key={service.slug}
                    className="flex flex-col items-start gap-6 rounded-lg border border-border p-6 transition-shadow hover:shadow-sm md:flex-row"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-6 w-6 text-[#dd702c]" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold">{service.title}</h3>
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

            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/services">View all services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl">Recent work that builds confidence quickly</h2>
              <p className="text-muted-foreground mt-3 max-w-3xl text-lg">
                Practical projects completed safely, tidily, and with clear communication from start to finish.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="h-full overflow-hidden border-border/80 pt-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl border-b">
                  <ImageWithFallback
                    src={siteImages.projects[index].src}
                    fallbackSrc={siteImages.projects[index].fallback}
                    alt={siteImages.projects[index].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {project.service}
                  </Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">{project.summary}</p>
                  <p>
                    <span className="font-semibold">Result:</span> {project.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#111827] text-white">
        <div className="container">
          <h2 className="max-w-3xl text-3xl md:text-5xl">{siteContent.home.finalCta.title}</h2>
          <p className="mt-4 max-w-3xl text-white/80">{siteContent.home.finalCta.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#dd702c] text-white hover:bg-[#c96121]">
              <Link href={siteContent.home.finalCta.primaryCta.href}>{siteContent.home.finalCta.primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
              <a href={siteContent.home.finalCta.secondaryCta.href}>{siteContent.home.finalCta.secondaryCta.label}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl md:text-5xl">Frequently asked questions</h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Straight answers to common questions from homeowners, landlords, and local business customers.
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <a href={siteContent.phoneHref}>Call {siteContent.phoneDisplay}</a>
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {siteContent.faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 rounded-2xl border bg-card p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl md:text-4xl">Quick contact</h2>
              <p className="text-muted-foreground mt-3 max-w-lg">{siteContent.contact.intro}</p>
              <p className="mt-5 text-sm font-semibold">Call: {siteContent.phoneDisplay}</p>
              <p className="text-sm">Email: {siteContent.email}</p>
            </div>

            <form className="grid gap-3">
              <Input type="text" name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="text" name="phone" placeholder="Phone" />
              <Textarea name="message" placeholder="Tell us about your job" rows={4} />
              <Button type="button">Send an Enquiry</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
