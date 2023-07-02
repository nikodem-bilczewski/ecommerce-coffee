import CheckoutForm from 'components/molecules/CheckoutForm'
import CheckoutItem from 'components/molecules/CheckoutItem'
import EmptyCart from 'components/molecules/EmptyCart'
import Labels from 'components/molecules/Labels'
import useCartContext from 'contexts/CartContext/useCartContext'

const CheckoutDetails = () => {
  const { cart, totalPrice } = useCartContext()

  if (cart.length <= 0) return <EmptyCart />

  return (
    <>
      <div className='flex w-full mt-16 flex-col mx-auto'>
        <div className='flex justify-between'>
          <h1 className='self-start text-4xl font-normal'>Checkout</h1>
        </div>
        <span className='mb-5 h-1 w-full border-b border-gray-400'></span>
      </div>
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
        <CheckoutForm />
      </div>
    </>
  )
}

export default CheckoutDetails
