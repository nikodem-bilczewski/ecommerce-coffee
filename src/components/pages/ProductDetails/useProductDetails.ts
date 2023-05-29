import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { getProduct } from 'services/products'

const useProductDetails = () => {
  const { id } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })

  return {
    data,
    isLoading,
    isError,
  }
}

export default useProductDetails
