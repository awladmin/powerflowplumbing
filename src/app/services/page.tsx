import type { Metadata } from 'next';

import { Services7 } from '@/components/services/services-7';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Domestic and light commercial plumbing services including leak repairs, blocked drains, bathroom plumbing, kitchen plumbing, and emergency callouts.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | PowerFlow Plumbing',
    description:
      'Domestic and light commercial plumbing services including leak repairs, blocked drains, bathroom plumbing, kitchen plumbing, and emergency callouts.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Services7 />

      <section className="section-padding bg-muted/40">
        <div className="container rounded-2xl border bg-card p-8 md:p-10">
          <h2 className="max-w-3xl text-3xl md:text-5xl">Not sure what service you need?</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg">
            Give us a quick overview of the issue and we will guide you to the right next step with a clear quote.
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
