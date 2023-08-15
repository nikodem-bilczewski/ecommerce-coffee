import { Link } from 'react-router-dom'

import { OrderProps } from './Order.types'

const Order = ({ date, totalItems, totalPrice, id }: OrderProps) => (
  <Link to={`orders/${id}`}>
    <div className='flex items-center justify-between w-full py-6 px-4 bg-black bg-opacity-10 shadow-md rounded-lg cursor-pointer hover:bg-opacity-20'>
      <h3 className='text-xl'>{date}</h3>
      <h3 className='text-xl'>Items: {totalItems}</h3>
      <h3 className='text-xl'>Total: {totalPrice} PLN</h3>
    </div>
  </Link>
)

export default Order
