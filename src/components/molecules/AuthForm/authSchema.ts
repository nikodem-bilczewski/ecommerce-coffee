import { object, string } from 'zod'

export const authSchema = object({
  username: string()
    .min(1, 'Username is required')
    .max(15, 'Username must be between 1-15 characters')
    .optional(),
  email: string()
    .min(1, 'Email address is required')
    .email('Email address is invalid')
    .optional(),
  identifier: string()
    .min(1, 'Email address is required')
    .email('Email address is invalid')
    .optional(),
  password: string()
    .min(1, 'Password is required')
    .min(12, 'Password must be more than 12 characters')
    .refine(
      (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
          value,
        ),
      'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    ),
})
