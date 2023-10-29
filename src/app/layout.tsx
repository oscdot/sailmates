import type { Metadata } from 'next';
import './globals.css';

import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import MainNav from '@/components/main-nav';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient } from '@tanstack/react-query';
import Providers from './utils/Providers';
import { Toaster } from 'sonner';

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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <MainNav />
            <main className="flex w-full flex-1 flex-col overflow-hidden">
              {children}
            </main>
            <Toaster position="top-center" />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
