import { FormProvider } from 'react-hook-form'

import Input from 'components/atoms/FormInput'
import Button from 'components/molecules/Button'
import ErrorMessage from 'components/molecules/ErrorMessage'
import Spinner from 'components/molecules/Spinner'

import useSignUpForm from './useSignUpForm'

const SignUpForm = () => {
  const { methods, onSubmit, isLoading, isError } = useSignUpForm()

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='space-y-6 w-full mt-10 sm:mx-auto sm:w-4/5 sm:max-w-3xl'
          action='#'
          method='POST'
        >
          <div className='flex flex-col gap-6'>
            <Input
              label='Username'
              type='text'
              name='username'
              darkLabel
              text
            />
            <Input
              label='Email Address'
              type='email'
              name='email'
              darkLabel
              text
            />
          </div>
          <Input
            label='Password'
            type='password'
            name='password'
            darkLabel
            text
          />
          <div className='w-full'>
            <Button type='submit' secondary disabled={isLoading}>
              Sign up
            </Button>
          </div>
          {isLoading && <Spinner />}
        </form>
      </FormProvider>
      {isError && <ErrorMessage />}
    </>
  )
}

export default SignUpForm
