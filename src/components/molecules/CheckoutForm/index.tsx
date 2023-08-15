import { FormProvider } from 'react-hook-form'

import Input from 'components/atoms/FormInput'
import RadioInput from 'components/atoms/RadioInput'
import Button from 'components/molecules/Button'
import Spinner from 'components/molecules/Spinner'

import useCheckoutForm from './useCheckoutForm'
import useDeliveryOptions from './useDeliveryOptions'
import usePaymentOptions from './usePaymentOptions'

const CheckoutForm = ({ onFormSubmit }: { onFormSubmit: () => void }) => {
  const { methods, onSubmit, isLoading, isError } = useCheckoutForm()
  const deliveryOptions = useDeliveryOptions()
  const paymentOptions = usePaymentOptions()

  const handleFormSubmit = () => {
    onSubmit()
    onFormSubmit()
  }

  return (
    <div className='w-full xl:w-1/2'>
      <h2 className='text-3xl xl:text-4xl mb-5'>Personal Details</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSubmit)}
          method='POST'
          className='space-y-4'
        >
          <Input label='First Name' type='text' name='firstName' />
          <Input label='Last Name' type='text' name='lastName' />
          <Input label='Email' type='email' name='email' />
          <Input label='Address' type='text' name='address' />
          <div className='flex justify-between gap-10 pb-5'>
            <div className='w-1/3'>
              <Input label='ZIP Code' type='text' name='zip' />
            </div>
            <div className='w-2/3'>
              <Input label='City' type='text' name='city' />
            </div>
          </div>
          <h2 className='text-3xl xl:text-4xl'>Delivery</h2>
          <div className='flex justify-start'>
            <RadioInput
              label='Select an option'
              name='delivery'
              options={deliveryOptions}
            />
          </div>
          <h2 className='text-3xl xl:text-4xl'>Payment</h2>
          <div className='flex justify-start'>
            <RadioInput
              label='Select an option'
              name='payment'
              options={paymentOptions}
            />
          </div>
          <div className='pt-8 xl:pt-16'>
            <Button secondary type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
      {isLoading && <Spinner />}
      {isError && (
        <h2 className='mt-8 text-center text-2xl font-light'>
          An error occured. Could not make an order.
        </h2>
      )}
    </div>
  )
}

export default CheckoutForm
