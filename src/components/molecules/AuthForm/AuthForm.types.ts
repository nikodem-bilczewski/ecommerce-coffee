import { TypeOf } from 'zod'

import { authSchema } from 'components/molecules/AuthForm/authSchema'

export type FormInput = TypeOf<typeof authSchema>

export type AuthFormProps = {
  isLogInForm?: boolean
}
