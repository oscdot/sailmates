import { z } from 'zod';

export const signupFormSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
    passwordConfirm: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match.',
    path: ['passwordConfirm'],
  });

export const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});
