import { useState } from 'react'

import CheckoutForm from 'components/molecules/CheckoutForm'
import CheckoutItem from 'components/molecules/CheckoutItem'
import EmptyCart from 'components/molecules/EmptyCart'
import Labels from 'components/molecules/Labels'
import SuccessfulSubmit from 'components/molecules/SuccessfulSubmit'
import useCartContext from 'contexts/CartContext/useCartContext'

const CheckoutDetails = () => {
  const { cart, totalPrice } = useCartContext()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmit = () => {
    if (!isSubmitted) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) return <SuccessfulSubmit />

  if (cart.length <= 0) return <EmptyCart />

  return (
    <>
      <h1 className='py-16 text-5xl font-bold text-center lg:text-6xl'>
        Checkout
      </h1>
      <div className='flex flex-col xl:flex-row justify-between gap-16 xl:gap-32 mb-10'>
        <div className='flex flex-col justify-between w-full py-2 xl:w-1/2'>
          <Labels />
          <div className='flex flex-1 flex-col gap-1 w-full mx-auto'>
            {cart &&
              cart.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id} />
              ))}
          </div>
          <div>
            <h3 className='text-2xl text-right py-4'>
              Total: {totalPrice} PLN
            </h3>
          </div>
        </div>
        <CheckoutForm onFormSubmit={handleFormSubmit} />
      </div>
    </>
  )
}

export default CheckoutDetails
