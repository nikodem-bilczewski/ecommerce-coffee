import { object, string } from 'zod'

export const checkoutSchema = object({
  firstName: string()
    .min(1, 'First name is required')
    .max(15, 'First name must be between 1-15 characters'),
  lastName: string()
    .min(1, 'Last name is required')
    .max(15, 'Last name must be between 1-15 characters'),
  email: string()
    .min(1, 'Email address is required')
    .email('Email address is invalid'),
  address: string()
    .min(1, 'Address address is required')
    .max(25, 'Address must be between 1-25 characters'),
  zip: string().refine(
    (value) => /^\d{2}-\d{3}$/.test(value),
    'ZIP Code must be in format XX-XXX',
  ),
  city: string()
    .min(1, 'City is required')
    .max(25, 'City must be between 1-25 characters'),
})
