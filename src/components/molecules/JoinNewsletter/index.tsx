import { FormProvider } from 'react-hook-form'

import Input from 'components/atoms/FormInput'
import Button from 'components/molecules/Button'
import Spinner from 'components/molecules/Spinner'

import { JoinNewsletterProps } from './JoinNewsletter.types'

const JoinNewsletter = ({
  methods,
  onSubmit,
  isLoading,
  isError,
}: JoinNewsletterProps) => (
  <div>
    <p className='mb-4 text-5xl font-thin drop-shadow-xl sm:text-7xl'>
      Join our newsletter
    </p>
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='flex text-left flex-col gap-4 mt-6 w-3/5 lg:w-3/5 mx-auto'
      >
        <Input
          label='Name'
          type='text'
          name='name'
          placeholder='John'
          text
          whiteLabel
        />
        <Input
          label='Email Address'
          type='email'
          name='email'
          placeholder='coffee@gmail.com'
          text
          whiteLabel
        />
        <Input
          label='I accept the terms and conditions'
          type='checkbox'
          name='terms'
          checkbox
          whiteLabel
        />
        {!isLoading ? (
          <div className='text-center mt-5'>
            <Button primary type='submit'>
              Join
            </Button>
          </div>
        ) : (
          <Spinner />
        )}
      </form>
    </FormProvider>
    {isError && (
      <p className='mt-2 text-lg text-red-600'>Something went wrong</p>
    )}
  </div>
)

export default JoinNewsletter
