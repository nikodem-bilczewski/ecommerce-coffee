import { TypeOf } from 'zod'

import { signUpSchema } from 'components/molecules/SignUpForm/signupSchema'

export type SignUpFormInput = TypeOf<typeof signUpSchema>
