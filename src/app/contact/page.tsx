import { AlertTriangle, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteContent } from '@/content/siteContent';
import { siteImages } from '@/content/siteImages';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a quote, book a site visit, or call PowerFlow Plumbing for urgent plumbing support.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | PowerFlow Plumbing',
    description:
      'Request a quote, book a site visit, or call PowerFlow Plumbing for urgent plumbing support.',
  },
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-4xl text-4xl tracking-tight md:text-6xl">{siteContent.contact.title}</h1>
          <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed">{siteContent.contact.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="flex items-start gap-3 pt-6">
                <Phone className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Call</p>
                  <a href={siteContent.phoneHref} className="text-muted-foreground text-sm hover:underline">
                    {siteContent.phoneDisplay}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-3 pt-6">
                <Mail className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a href={`mailto:${siteContent.email}`} className="text-muted-foreground text-sm hover:underline">
                    {siteContent.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-3 pt-6">
                <Clock3 className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Opening hours</p>
                  <ul className="text-muted-foreground mt-1 space-y-1 text-sm">
                    {siteContent.openingHours.map((entry) => (
                      <li key={entry.label}>
                        {entry.label}: {entry.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-3 pt-6">
                <MapPin className="mt-1 size-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Service area</p>
                  <p className="text-muted-foreground text-sm">{siteContent.serviceArea}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 rounded-xl border border-primary/25 bg-sky-50 p-4">
            <p className="flex items-start gap-3 text-sm">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-primary" />
              <span>{siteContent.contact.urgentNote}</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative min-h-52 overflow-hidden rounded-xl border">
            <ImageWithFallback
              src={siteImages.contact.src}
              fallbackSrc={siteImages.contact.fallback}
              alt={siteImages.contact.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send an enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <Input type="text" name="name" placeholder="Name" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="text" name="phone" placeholder="Phone" />
                <Input type="text" name="service" placeholder="Service needed" />
                <Input type="text" name="postcode" placeholder="Postcode / area" />
                <Textarea name="message" placeholder="Tell us about your project" rows={5} />
                <Button type="button">Send Enquiry</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
