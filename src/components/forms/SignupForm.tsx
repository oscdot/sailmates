'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signupFormSchema } from '@/types/users';
import { pb } from '@/lib/pb';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { RedirectType, redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      const createdUser = await pb.collection('users').create({
        username: values.username,
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      });
      //pb.collection('users').authWithPassword(values.email, values.password);
      toast.success(`Welcome, ${createdUser.username}!`, {
        duration: 1200,
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast.error(error.message + ' Please check ur details.');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="toms283" type="text" {...field} />
              </FormControl>
              <FormDescription>
                This will be displayed publicly.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="toms283@gmail.com" type="text" {...field} />
              </FormControl>
              <FormDescription>
                This will be used to confirm your account.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="***********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm your password</FormLabel>
              <FormControl>
                <Input placeholder="***********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create my account
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
