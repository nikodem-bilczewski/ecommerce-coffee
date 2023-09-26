/* eslint-disable camelcase */
import { boolean, object, string } from 'zod'

export const newsletterSchema = object({
  name: string()
    .nonempty('Name is required')
    .max(25, 'First name must be between 1-15 characters'),
  email: string()
    .nonempty('Email address is required')
    .email('Email address is invalid'),
  terms: boolean().refine((checkbox) => checkbox === true, {
    message: 'You must accept terms and conditions',
  }),
})
