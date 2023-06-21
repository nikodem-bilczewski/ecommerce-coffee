import { TypeOf } from 'zod'

import { checkoutSchema } from './checkoutSchema'

export type FormInput = TypeOf<typeof checkoutSchema>
