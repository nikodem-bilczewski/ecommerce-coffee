import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import useAuthContext from 'contexts/AuthContext/useAuthContext'
import { getOrders } from 'services/orders'

const useOrders = () => {
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem('currentOrdersPage')) || 1,
  )
  const { user } = useAuthContext()

  const jwt = user?.jwt
  const id = user?.user.id

  const { isLoading, isError, data } = useQuery({
    queryKey: ['orders', currentPage],
    queryFn: () => getOrders(jwt, id, currentPage),
  })

  const orders = data?.data
  const totalPages = data?.meta.pagination.pageCount

  const onPageChange = (pageNumber: number) => {
    sessionStorage.setItem('currentOrdersPage', String(pageNumber + 1))
    setCurrentPage(pageNumber + 1)
  }

  return {
    orders,
    isLoading,
    isError,
    currentPage,
    totalPages,
    onPageChange,
  }
}

export default useOrders
