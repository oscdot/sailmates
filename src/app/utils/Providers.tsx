'use client';
import { pb } from '@/lib/pb';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect } from 'react';
import { toast } from 'sonner';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Subscribe to changes in any users record
    pb.collection('posts').subscribe('*', function (e) {
      toast.message(e.record.title + ' has been create.');
    });

    return () => {
      pb.collection('posts').unsubscribe();
    };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
