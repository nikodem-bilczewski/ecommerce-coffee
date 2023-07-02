import ItemDetails from 'components/atoms/ItemDetails'
import { CartItem } from 'contexts/CartContext/CartContext.types'

const CheckoutItem = ({ cartItem }: { cartItem: CartItem }) => {
  const { quantity } = cartItem
  const { title, price, currency } = cartItem.item.attributes
  const { url } = cartItem.item.attributes.img.data.attributes

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-2 py-2'>
      <div className='flex gap-2 items-center'>
        <img
          src={import.meta.env.VITE_BASE_URL + url}
          alt={title}
          className='w-[7rem] h-[7rem] object-cover'
        />
        <h2 className='text-2xl'>{title}</h2>
      </div>
      <div className='flex justify-between sm:w-[24rem] md:w-[26rem] items-center'>
        <ItemDetails label='Quantity' value={quantity} />
        <ItemDetails label='Price' value={price} currency={currency} />
        <ItemDetails
          label='Total'
          value={price * quantity}
          currency={currency}
        />
      </div>
    </div>
  )
}

export default CheckoutItem
