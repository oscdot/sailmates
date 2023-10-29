import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import MainNav from '@/components/main-nav';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient } from '@tanstack/react-query';
import Providers from './utils/Providers';
import { Toaster } from 'sonner';
import { pb } from '@/lib/pb';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'The best amateur porn sharing site. NSFW videos, pics, and more.',
  description:
    'The best way to share ur amateur porn. Share it safely, get paid.',
  keywords: [
    'nudes',
    'kinks',
    'nude',
    'xxx',
    'adult',
    'adult website',
    'amateur porn',
    'nsfw',
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
