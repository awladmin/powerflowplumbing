import Link from 'next/link';

import { siteContent } from '@/content/siteContent';

import Logo from './logo';

const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Logo svgClassName="h-12 w-[210px] lg:h-12 lg:w-[230px]" />
            <p className="text-muted-foreground max-w-lg text-sm">
              {siteContent.footer.summary}
            </p>
            <a
              href={siteContent.phoneHref}
              className="text-foreground inline-flex text-sm font-semibold"
            >
              {siteContent.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
              {siteContent.services.list.slice(0, 5).map((service) => (
                <li key={service.slug}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {siteContent.navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-muted-foreground hover:text-foreground" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-muted-foreground">{siteContent.footer.copyright}</p>
          <p className="text-muted-foreground">Service area: {siteContent.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
