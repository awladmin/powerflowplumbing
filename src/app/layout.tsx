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
    default: 'PowerFlow Plumbing | Trusted Local Plumbers',
    template: '%s | PowerFlow Plumbing',
  },
  description: siteContent.siteDescription,
  keywords: [
    'PowerFlow Plumbing',
    'local plumber',
    'emergency plumber',
    'bathroom plumber',
    'kitchen plumber',
    'leak repairs',
    'blocked drains',
    'landlord plumbing maintenance',
    'commercial plumber',
    'plumbing repairs',
  ],
  authors: [{ name: 'PowerFlow Plumbing' }],
  creator: 'PowerFlow Plumbing',
  publisher: 'PowerFlow Plumbing',
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
    title: 'PowerFlow Plumbing | Trusted Local Plumbers',
    description: siteContent.siteDescription,
    url: siteContent.siteUrl,
    siteName: 'PowerFlow Plumbing',
    images: [{ url: '/images/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerFlow Plumbing | Trusted Local Plumbers',
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
              '@type': 'Plumber',
              name: 'PowerFlow Plumbing',
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
