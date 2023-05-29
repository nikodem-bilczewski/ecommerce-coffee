import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getProducts } from 'services/products'

const useProducts = () => {
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem('currentPage')) || 1,
  )

  const { isLoading, isError, data } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => getProducts(currentPage),
    keepPreviousData: true,
  })

  const products = data?.data
  const totalPages = data?.meta.pagination.pageCount

  const onPageChange = (pageNumber: number) => {
    sessionStorage.setItem('currentPage', String(pageNumber + 1))
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
