import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { TypeOf, object, string } from 'zod'

import FormInput from 'components/atoms/FormInput'
import Button from 'components/molecules/Button'
import { signUpFn } from 'config/axios'

const formSchema = object({
  email: string()
    .min(1, 'Email address is required')
    .email('Email address is invalid'),
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
export type FormInput = TypeOf<typeof formSchema>
// type FormValues = {
//   email: string
//   password: string
// }

const Form = ({ isLogInForm }: { isLogInForm?: boolean }) => {
  const methods = useForm<FormInput>({
    resolver: zodResolver(formSchema),
  })

  const {
    reset,
    handleSubmit,
    // formState: { isSubmitSuccessful },
  } = methods

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data)
    await signUpFn(data)
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-6 w-full mt-10 sm:mx-auto sm:w-4/5 sm:max-w-3xl'
        action='#'
        method='POST'
      >
        <FormInput label='Email Address' type='email' name='email' />
        <FormInput label='Password' type='password' name='password' />
        {isLogInForm && (
          <div className='flex justify-end'>
            <a
              href='#'
              className='text-gray-700 hover:text-gray-900 text-lg md:text-xl font-extralight md:font-light'
            >
              Forgot password?
            </a>
          </div>
        )}
        <div className='w-full'>
          <Button type='submit' formButton>
            {isLogInForm ? 'Log in' : 'Sign up'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default Form
