import Order from 'components/molecules/Order'
import PaginationButtons from 'components/molecules/PaginationButtons'
import Spinner from 'components/molecules/Spinner'

import useOrders from './useOrders'

const OrdersList = () => {
  const { orders, isError, isLoading, currentPage, totalPages, onPageChange } =
    useOrders()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return (
      <h2 className='text-center text-2xl'>
        An error occured. Could not fetch your orders.
      </h2>
    )
  }

  return (
    <div className='flex-1 w-full md:w-4/5 mx-auto my-10'>
      <h2 className='text-2xl'>Your orders</h2>
      <div className='flex flex-col gap-4 mt-4 mb-6'>
        {orders &&
          orders.map(({ attributes, id }) => (
            <Order
              key={id}
              id={id}
              date={attributes.date}
              totalItems={attributes.products.reduce(
                (totalQuantity, product) => totalQuantity + product.quantity,
                0,
              )}
              totalPrice={attributes.total}
            />
          ))}
        {orders && orders.length <= 0 && (
          <p>You haven't placed any order in our store.</p>
        )}
      </div>
      {totalPages && (
        <PaginationButtons
          pageCount={totalPages}
          forcePage={currentPage}
          onChange={onPageChange}
        />
      )}
    </div>
  )
}

export default OrdersList
