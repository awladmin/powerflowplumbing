import { readFileSync } from 'fs';
import type { Metadata } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import { join } from 'path';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'This Privacy Policy explains how Power Trip Electrical handles personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy',
    description:
      'This Privacy Policy explains how Power Trip Electrical handles personal information.',
  },
};

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-10 text-4xl font-medium tracking-tighter md:mb-12 md:text-5xl md:leading-none lg:text-6xl">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="lg:text-4xxl text-xl leading-snug tracking-tighter md:text-3xl">
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground/70 mb-8 max-w-4xl leading-relaxed whitespace-pre-wrap">
      {children}
    </p>
  ),
  a: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} className="text-foreground underline underline-offset-4 hover:text-foreground/70">
      {children}
    </a>
  ),
};

export default async function PrivacyPolicy() {
  // Read the MDX file
  const filePath = join(process.cwd(), './src/app/privacy-policy/index.mdx');
  const source = readFileSync(filePath, 'utf8');

  // Compile the MDX content
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        format: 'mdx',
      },
    },
    components,
  });

  return (
    <section className="section-padding bg-muted/50">
      <div className="container">{content}</div>
    </section>
  );
}
