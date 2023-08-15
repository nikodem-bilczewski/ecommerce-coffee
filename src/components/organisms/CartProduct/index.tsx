import MinusSmallIcon from '@heroicons/react/24/outline/MinusSmallIcon'
import PlusSmallIcon from '@heroicons/react/24/outline/PlusSmallIcon'

import IconWrapper from 'components/atoms/IconWrapper'
import useCartContext from 'contexts/CartContext/useCartContext'

import { CartProductProps } from './CartProduct.types'

const CartProduct = ({ item }: CartProductProps) => {
  const { updateItem, deleteItem } = useCartContext()

  const { title, price } = item.item.attributes
  const img = item.item.attributes.img.data.attributes.url

  return (
    <div className='flex justify-between bg-stone-100 mx-10 gap-2 items-center p-4 rounded-md shadow-md'>
      <div className='flex'>
        <img
          src={img}
          alt={title}
          className='hidden md:block sm:w-[10rem] sm:h-[10rem] object-cover'
        />
      </div>
      <div className='flex flex-col items-center flex-1'>
        <h2 className='text-2xl text-center'>{title}</h2>
        <div className='flex items-center gap-4 mt-2'>
          <IconWrapper
            clickHandler={updateItem.bind(null, item.id, item.quantity - 1)}
          >
            <MinusSmallIcon className='h-4 w-4' />
          </IconWrapper>
          <span className='text-lg'>{item.quantity}</span>
          <IconWrapper
            clickHandler={updateItem.bind(null, item.id, item.quantity + 1)}
          >
            <PlusSmallIcon className='h-4 w-4' />
          </IconWrapper>
        </div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <button
          onClick={deleteItem.bind(null, item.id)}
          className='rounded-lg text-xl font-light bg-red-400 bg-opacity-50 hover:bg-opacity-70 p-2 block'
        >
          delete
        </button>
        <h3 className='text-xl md:text-2xl'>{item.quantity * price} PLN</h3>
      </div>
    </div>
  )
}

export default CartProduct
