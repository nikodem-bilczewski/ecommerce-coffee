import { CartProduct } from '../CheckoutForm/checkoutForm.types'

const OrderProduct = ({ title, price, quantity, total, img }: CartProduct) => (
  <div className='flex justify-between flex-1 items-center bg-slate-100 bg-opacity-90 p-4 rounded-md shadow-md'>
    <div className='flex justify-between items-center gap-4'>
      <img className='w-[9rem] h-[9rem] object-cover' src={img} />
      <p className='text-xl lg:text-2xl'>{title}</p>
    </div>
    <div className='flex flex-col gap-5 sm:flex-row sm:gap-20'>
      <p className='text-lg sm:text-xl'>Price: {price} PLN</p>
      <p className='text-lg sm:text-xl'>Quantity: {quantity}</p>
      <p className='text-lg sm:text-xl'>Total: {total} PLN</p>
    </div>
  </div>
)

export default OrderProduct
