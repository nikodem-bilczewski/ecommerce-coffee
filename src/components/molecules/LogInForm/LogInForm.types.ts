import { TypeOf } from 'zod'

import { logInSchema } from 'components/molecules/LogInForm/loginSchema'

export type LogInFormInput = TypeOf<typeof logInSchema>
