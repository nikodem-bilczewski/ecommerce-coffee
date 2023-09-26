import { FormProvider } from 'react-hook-form'

import Input from 'components/atoms/FormInput'
import Button from 'components/molecules/Button'
import ErrorMessage from 'components/molecules/ErrorMessage'
import Spinner from 'components/molecules/Spinner'

import useLogInForm from './useLogInForm'

const LogInForm = () => {
  const { methods, onSubmit, isLoading, isError } = useLogInForm()

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='space-y-6 w-full mt-10 sm:mx-auto sm:w-4/5 sm:max-w-3xl'
          action='#'
          method='POST'
        >
          <Input
            label='Email Address'
            type='email'
            name='identifier'
            darkLabel
            text
          />
          <Input
            label='Password'
            type='password'
            name='password'
            darkLabel
            text
          />
          <div className='flex justify-end'>
            <a
              href='#'
              className='text-gray-700 hover:text-gray-900 text-lg md:text-xl font-extralight md:font-light'
            >
              Forgot password?
            </a>
          </div>
          <div className='w-full'>
            <Button type='submit' secondary disabled={isLoading}>
              Log in
            </Button>
          </div>
          {isLoading && <Spinner />}
        </form>
      </FormProvider>
      {isError && <ErrorMessage />}
    </>
  )
}

export default LogInForm
