import type { Metadata } from 'next';
import './globals.css';

import { Inter as FontSans } from 'next/font/google';
import { Toaster } from 'sonner';
import { Providers } from './providers';
import NavigationBar from '@/components/NavigationBar';
export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Where sailing communities meet',
  description:
    'The best way to share, and connect with sailing communities around the world',
  keywords: [
    'sailmates',
    'sailing',
    'sailing community',
    'sejlklub',
    'sejlklubber',
    'optimistjolle',
    'sejlads',
    'både',
    'båd',
    'sejlbåd',
    'sælg båd',
    'køb båd',
    'både til salg',
    'køb sejlbåd',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NavigationBar />
          <main className="mx-20 flex min-h-screen justify-center">
            <div className="lg:w-full xl:w-2/3">{children}</div>
          </main>
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
