'use client';

import { ClerkProvider } from '@clerk/clerk-react';
import { useAuth } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
import { ConvexReactClient, useConvex } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ThemeProvider } from 'next-themes';

const convexClient = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
