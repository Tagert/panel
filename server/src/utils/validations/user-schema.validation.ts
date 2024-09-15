import { z } from 'zod';

export const userRegistrationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(/\d/, 'Password must contain at least one number')
    .min(1, 'Password cannot be empty'),
});
