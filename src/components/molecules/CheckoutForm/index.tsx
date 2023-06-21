import { FormProvider } from 'react-hook-form'

import Input from 'components/atoms/FormInput'

import Button from '../Button'
import useCheckoutForm from './useCheckoutForm'

const CheckoutForm = () => {
  const { methods, onSubmit } = useCheckoutForm()

  return (
    <div className='w-full xl:w-1/2'>
      <h2 className='text-3xl xl:text-4xl mb-5'>Personal Details</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          method='POST'
          className='space-y-6'
        >
          <Input label='First Name' type='text' name='firstName' />
          <Input label='Last Name' type='text' name='lastName' />
          <Input label='Email' type='email' name='email' />
          <Input label='Address' type='text' name='address' />
          <div className='flex justify-between gap-10'>
            <div className='w-1/3'>
              <Input label='ZIP Code' type='text' name='zip' />
            </div>
            <div className='w-2/3'>
              <Input label='City' type='text' name='city' />
            </div>
          </div>
          <div className='pt-8 xl:pt-16'>
            <Button secondary type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default CheckoutForm
