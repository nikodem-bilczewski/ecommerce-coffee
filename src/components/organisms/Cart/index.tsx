import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

import IconWrapper from 'components/atoms/IconWrapper'
import Button from 'components/molecules/Button'
import CartProduct from 'components/molecules/CartProduct'
import useCartContext from 'contexts/CartContext/useCartContext'

const Cart = () => {
  const { cart, toggleCart, isOpen, totalPrice, totalItems, clearCart } =
    useCartContext()

  return (
    <div
      className={`${
        isOpen
          ? '-translate-x-[0rem] opacity-100'
          : '-translate-x-[48rem] opacity-0'
      } flex flex-col justify-between top-0 left-0 fixed z-40 h-full w-[30rem] bg-stone-200 shadow-md md:w-[42rem] overflow-y-auto overflow-x-hidden transition-all duration-500`}
    >
      <div className='flex items-center justify-between p-6'>
        <div className='text-xl md:text-3xl md:font-light'>
          Shopping Cart ({totalItems})
        </div>
        <IconWrapper clickHandler={toggleCart}>
          <XMarkIcon className='h-8 w-8 lg:h-10 lg:w-10' />
        </IconWrapper>
      </div>
      {totalItems > 0 && (
        <div className='flex justify-center items-center'>
          <Button primary onClick={() => clearCart()}>
            Clear cart
          </Button>
        </div>
      )}
      {cart && cart.length > 0 && (
        <div className='flex flex-col flex-1 gap-5 my-4'>
          {cart.map((item) => (
            <CartProduct key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className='p-6'>
        {totalPrice > 0 && (
          <h2 className='text-xl md:text-2xl mb-3'>Total: {totalPrice} PLN</h2>
        )}
        {totalItems > 0 && <Button secondary>Checkout</Button>}
      </div>
    </div>
  )
}
export default Cart
