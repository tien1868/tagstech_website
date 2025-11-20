import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TAGS - AI Garment Processing | 9x Faster Than Manual',
  description: 'Automated textile analysis for thrift stores. Brand detection, measurements, pricing in 20 seconds. Save hundreds monthly. Pilot programs available.',
  keywords: ['garment analysis', 'thrift store', 'AI', 'textile analysis', 'consignment', 'inventory management'],
  authors: [{ name: 'Tags Technologies LLC' }],
  openGraph: {
    title: 'TAGS - AI-Powered Garment Processing',
    description: 'Process thrift store garments 9x faster with AI. Save hundreds per month.',
    url: 'https://tagstech.app',
    siteName: 'TAGS',
    images: [
      {
        url: '/tags-logo.png',
        width: 1080,
        height: 1080,
        alt: 'TAGS Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAGS - AI Garment Processing',
    description: 'Process thrift store garments 9x faster with AI',
    images: ['/tags-logo.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/tags-logo-header.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
