import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from 'utils/getProducts'

const useProducts = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { isLoading, isError, data } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => getProducts(currentPage),
    keepPreviousData: true,
  })

  const products = data?.data.list
  const totalPages = data?.data.meta.pages

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
