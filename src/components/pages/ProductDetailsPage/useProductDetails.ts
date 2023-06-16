import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router'

import { getProduct } from 'services/products'

const useProductDetails = () => {
  const { id } = useParams()

  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuantity = Number(event.target.value)
    setQuantity(inputQuantity)
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })

  return {
    data,
    isLoading,
    isError,
    quantity,
    handleQuantityChange,
  }
}

export default useProductDetails
