import './globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { siteContent } from '@/content/siteContent';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: {
    default: 'Power Trip Electrical | Trusted Local Electricians',
    template: '%s | Power Trip Electrical',
  },
  description: siteContent.siteDescription,
  keywords: [
    'Power Trip Electrical',
    'local electrician',
    'domestic electrician',
    'commercial electrician',
    'consumer unit upgrades',
    'rewires',
    'lighting installation',
    'EV charger installation',
    'fault finding',
    'electrical testing',
  ],
  authors: [{ name: 'Power Trip Electrical' }],
  creator: 'Power Trip Electrical',
  publisher: 'Power Trip Electrical',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'Power Trip Electrical | Trusted Local Electricians',
    description: siteContent.siteDescription,
    url: siteContent.siteUrl,
    siteName: 'Power Trip Electrical',
    images: [{ url: '/images/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power Trip Electrical | Trusted Local Electricians',
    description: siteContent.siteDescription,
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Electrician',
              name: 'Power Trip Electrical',
              description: siteContent.siteDescription,
              url: siteContent.siteUrl,
              email: siteContent.email,
              telephone: '+44 1494 123450',
              areaServed: 'Buckinghamshire',
              serviceType: siteContent.services.list.map((service) => service.title),
            }),
          }}
        />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*18)] lg:[--header-height:calc(var(--spacing)*20)]',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
