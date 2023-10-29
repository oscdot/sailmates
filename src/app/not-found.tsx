import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen -translate-y-20 flex-col items-center justify-center px-4 py-20 text-center">
      <Frown className="text-for mb-8 h-12 w-12" />
      <h1 className="mb-4 text-6xl font-semibold text-gray-800">404</h1>
      <p className="mb-8 text-xl text-gray-600">
        Sorry to leave u on empty waters here, but that page couldn&apos;t be
        found.
      </p>
      <Button asChild size="lg">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
