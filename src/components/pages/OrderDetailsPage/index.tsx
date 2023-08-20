/* eslint-disable no-unsafe-optional-chaining */
import OrderDetails from 'components/organisms/OrderDetails'

import useOrderDetails from './useOrderDetails'

const OrderDetailsPage = () => {
  const { order, isLoading, isError } = useOrderDetails()

  if (isLoading) {
    return <h2 className='text-center text-2xl'>Loading...</h2>
  }

  if (isError || !order) {
    return (
      <h2 className='text-center text-2xl'>
        An error occured. Could not fetch product.
      </h2>
    )
  }

  const { date, currency, products, total } = order?.attributes
  const totalItems = products?.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0,
  )

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
