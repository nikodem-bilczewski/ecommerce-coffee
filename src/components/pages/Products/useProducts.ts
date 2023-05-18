import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getProducts } from 'services/products'

const useProducts = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { isLoading, isError, data } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => getProducts(currentPage),
    keepPreviousData: true,
  })

  const products = data?.list
  const totalPages = data?.meta.pages

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    isLoading,
    isError,
    products,
    currentPage,
    totalPages,
    onPageChange,
  }
}

export default useProducts
