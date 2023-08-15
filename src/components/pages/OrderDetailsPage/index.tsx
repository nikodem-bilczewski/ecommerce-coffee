/* eslint-disable no-unsafe-optional-chaining */
import OrderDetails from 'components/organisms/OrderDetails'

import useOrderDetails from './useOrderDetails'

const OrderDetailsPage = () => {
  const { order, isLoading, isError } = useOrderDetails()

  const date = order?.attributes.date
  const currency = order?.attributes.currency
  const products = order?.attributes.products
  const total = order?.attributes.total
  const totalItems = products?.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0,
  )

  if (isLoading) {
    return <h2 className='text-center text-2xl'>Loading...</h2>
  }

  if (isError) {
    return (
      <h2 className='text-center text-2xl'>
        An error occured. Could not fetch product.
      </h2>
    )
  }

  return (
    <OrderDetails
      date={date}
      currency={currency}
      total={total}
      totalItems={totalItems}
      products={products}
    />
  )
}

export default OrderDetailsPage
