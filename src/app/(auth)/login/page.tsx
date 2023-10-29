import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import LoginForm from '@/components/forms/LoginForm';
import { pb } from '@/lib/pb';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login - Sailmates',
  description: 'Login to your Sailmates account',
};

export default function LoginPage() {
  return (
    <>
      <div className="mt-28 flex h-screen w-full flex-col items-center lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to continue
            </p>
          </div>
          <LoginForm />
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: 'link' }))}
          >
            Dont have an account? Sign up
          </Link>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
