import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import useAuthContext from 'contexts/AuthContext/useAuthContext'
import { getOrder } from 'services/orders'

const useOrderDetails = () => {
  const { user } = useAuthContext()
  const token = user?.jwt
  const { id } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['order', id],
    queryFn: () => getOrder(token, id),
  })
  const order = data?.data

  const totalQuantity = order?.attributes.products.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0,
  )

  return {
    order,
    isLoading,
    isError,
    totalQuantity,
  }
}

export default useOrderDetails
