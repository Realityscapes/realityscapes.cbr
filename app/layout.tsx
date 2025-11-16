import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Realityscapes CBR - Professional Softscaping & Garden Design Canberra',
  description: 'Transform your yard with professional softscaping services in Canberra. Turf installation, garden design, mulchwork & hedge planting. Fully insured with 5-star reviews. Book your free walkthrough today.',
  keywords: 'softscaping Canberra, garden makeover Canberra, turf installation Canberra, mulching Canberra, hedge planting Canberra, garden design Canberra',
  icons: {
    icon: '/realityscapes-logo-jpeg (1).jpg',
    apple: '/realityscapes-logo-jpeg (1).jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7WFFYZZZR3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7WFFYZZZR3');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}