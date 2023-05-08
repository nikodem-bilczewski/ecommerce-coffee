import NavigateTo from 'components/molecules/NavigateTo'

import { FormWrapperProps } from './FormWrapper.types'

const FormWrapper = ({ isLogInForm, children }: FormWrapperProps) => (
  <div className='flex min-h-full flex-col lg:w-4/5 mx-auto justify-center px-6 lg:px-8'>
    <div className=' text-center sm:mx-auto sm:w-full sm:max-w-sm'>
      <h1 className='text-5xl md:text-6xl'>COFFEE HUB</h1>
      <h2 className='mt-10 text-center text-4xl leading-9 tracking-tight text-gray-900'>
        {isLogInForm ? 'Log in to your account' : 'Create an account'}
      </h2>
    </div>
    {children}
    {isLogInForm ? (
      <NavigateTo
        text='Not a member?'
        linkText='Create an account'
        path='/signup'
      />
    ) : (
      <NavigateTo
        text='Already have an account?'
        linkText='Log in'
        path='/login'
      />
    )}
  </div>
)

export default FormWrapper
