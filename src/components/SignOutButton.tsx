'use client';

import { Button } from '@/components/ui/button';
import { pb } from '@/lib/pb';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => {
        pb.authStore.clear();
        router.push('/');
      }}
    >
      Sign out
    </Button>
  );
};
export default SignOutButton;
