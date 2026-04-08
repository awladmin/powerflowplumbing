'use client';

import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Logo from '@/components/layout/logo';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/content/siteContent';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="navbar-container flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-2 lg:flex">
          {siteContent.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted',
                pathname === link.href ? 'bg-muted text-foreground' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteContent.phoneHref}
            className="text-foreground inline-flex items-center gap-2 text-sm font-semibold"
          >
            <Phone className="size-4" />
            {siteContent.phoneDisplay}
          </a>
          <Button size="sm" asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex size-9 items-center justify-center rounded-md border lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'bg-background fixed inset-x-0 top-[var(--header-height)] z-40 border-b px-6 pb-6 pt-4 transition-all lg:hidden',
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1">
          {siteContent.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'rounded-md px-3 py-3 text-base font-medium',
                pathname === link.href ? 'bg-muted text-foreground' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 grid gap-3">
          <Button asChild>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Request a Quote
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href={siteContent.phoneHref} onClick={() => setIsMenuOpen(false)}>
              Call {siteContent.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
