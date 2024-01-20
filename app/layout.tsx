import './globals.css';

import React, { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import clsx from 'clsx';

import { Header } from '@/components/layout/Header';
import meta from '@/data/meta.json';

const montserrat: NextFont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

import type { Metadata } from 'next';
type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: meta.twitter,
  openGraph: meta.openGraph,
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.className,
          'flex h-full min-h-screen flex-col bg-gradient-to-r from-zinc-600 to-dark',
        )}
      >
        <Header />

        <main className="flex-grow" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
