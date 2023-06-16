import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

import { getProducts } from 'services/products'

const useProducts = () => {
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem('currentPage')) || 1,
  )

  const [selectedCategory, setSelectedCategory] = useState<string>(
    sessionStorage.getItem('currentCategory') || 'all',
  )

  const { isLoading, isError, data } = useQuery({
    queryKey: ['products', currentPage, selectedCategory],
    queryFn: () => getProducts(currentPage, selectedCategory),
    keepPreviousData: true,
  })

  const products = data?.data
  const totalPages = data?.meta.pagination.pageCount

  const onPageChange = (pageNumber: number) => {
    sessionStorage.setItem('currentPage', String(pageNumber + 1))
    setCurrentPage(pageNumber + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedCategory = event.target.value
    sessionStorage.setItem('currentPage', String(1))
    sessionStorage.setItem('currentCategory', selectedCategory)
    setSelectedCategory(selectedCategory)
    setCurrentPage(1)
  }

  return {
    isLoading,
    isError,
    products,
    currentPage,
    totalPages,
    selectedCategory,
    handleCategoryChange,
    onPageChange,
  }
}

export default useProducts
