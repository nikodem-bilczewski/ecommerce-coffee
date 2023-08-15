import { CartProduct } from '../CheckoutForm/checkoutForm.types'

const OrderProduct = ({ title, price, quantity, total, img }: CartProduct) => (
  <div className='flex justify-between flex-1 items-center bg-slate-100 bg-opacity-90 p-4 rounded-md shadow-md'>
    <div className='flex justify-between items-center gap-4'>
      <img className='w-[9rem] h-[9rem] object-cover' src={img} />
      <h3 className='text-xl lg:text-2xl'>{title}</h3>
    </div>
    <div className='flex flex-col gap-5 sm:flex-row sm:gap-20'>
      <h3 className='text-lg sm:text-xl'>
        Price: {price}
        PLN
      </h3>
      <h3 className='text-lg sm:text-xl'>Quantity: {quantity}</h3>
      <h3 className='text-lg sm:text-xl'>
        Total: {total}
        PLN
      </h3>
    </div>
  </div>
)

export default OrderProduct
