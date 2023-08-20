import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { getOrder } from 'services/orders'

const useOrderDetails = () => {
  const { id } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['order', id],
    queryFn: () => getOrder(id),
  })

  const totalQuantity = data?.attributes.products.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0,
  )

  return {
    order: data,
    isLoading,
    isError,
    totalQuantity,
  }
}

export default useOrderDetails
