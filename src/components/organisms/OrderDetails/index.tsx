import { Link } from 'react-router-dom'

import Button from 'components/molecules/Button'
import OrderProduct from 'components/molecules/OrderProduct'

import { OrderDetailsProps } from './OrderDetails.types'

const OrderDetails = ({
  date,
  total,
  totalItems,
  currency,
  products,
}: OrderDetailsProps) => (
  <div className='flex flex-col justify-between gap-10 px-10 py-8 w-full md:w-4/5 lg:w-3/5 mx-auto'>
    <div>
      <h2 className='text-3xl'>Order from {date}</h2>
      <p className='text-lg'>Total items: {totalItems}</p>
    </div>
    <div className='flex flex-col gap-5'>
      {products &&
        products.map(({ title, price, quantity, total, img }) => (
          <OrderProduct
            key={title}
            title={title}
            price={price}
            quantity={quantity}
            total={total}
            img={img}
          />
        ))}
    </div>
    <h2 className='text-right text-3xl'>
      Total: {total}
      {currency}
    </h2>
    <Link to='/user'>
      <Button secondary>Back</Button>
    </Link>
  </div>
)

export default OrderDetails
