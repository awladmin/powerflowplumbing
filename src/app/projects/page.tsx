import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Recent electrical projects from Power Trip Electrical including rewires, lighting upgrades, EV charger installs, and commercial works.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Power Trip Electrical',
    description:
      'Recent electrical projects from Power Trip Electrical including rewires, lighting upgrades, EV charger installs, and commercial works.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container">
          <h1 className="max-w-4xl text-4xl tracking-tight md:text-6xl">Recent work completed for local homes and businesses</h1>
          <p className="text-muted-foreground mt-5 max-w-3xl text-lg">
            These fictional case studies show the type of work we deliver: practical planning, safe installation, and tidy completion.
          </p>
          <p className="text-muted-foreground mt-3 text-sm">
            Image mapping guide:{' '}
            <Link href="/docs/project-image-guide.md" className="underline">
              /docs/project-image-guide.md
            </Link>
          </p>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container grid gap-6 lg:grid-cols-2">
          {siteContent.projects.map((project, index) => (
            <Card key={project.title} className="h-full overflow-hidden pt-0">
              <div className="relative aspect-[16/10] overflow-hidden border-b">
                <ImageWithFallback
                  src={siteImages.projects[index].src}
                  fallbackSrc={siteImages.projects[index].fallback}
                  alt={siteImages.projects[index].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
              <CardHeader className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {project.service}
                </Badge>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.summary}</p>
              </CardHeader>

              <CardContent className="space-y-5 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">Property / client type:</span> {project.propertyType}
                </p>
                <p>
                  <span className="font-semibold">Challenge:</span> {project.challenge}
                </p>
                <p>
                  <span className="font-semibold">Work completed:</span> {project.workCompleted}
                </p>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#dd702c]" />
                    <span>
                      <span className="font-semibold">Result:</span> {project.result}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container rounded-2xl border bg-card p-8 md:p-10">
          <h2 className="max-w-3xl text-3xl md:text-5xl">Planning a similar project?</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl">
            Share your plans and we will provide a practical scope, timing estimate, and transparent quote.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/contact">Request a Quote</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={siteContent.phoneHref}>Call {siteContent.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
