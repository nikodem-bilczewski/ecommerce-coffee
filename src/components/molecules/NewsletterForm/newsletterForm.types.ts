import { TypeOf } from 'zod'

import { newsletterSchema } from './newsletterSchema'

export type FormInput = TypeOf<typeof newsletterSchema>
