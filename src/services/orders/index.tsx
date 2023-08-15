import { Order } from 'components/molecules/CheckoutForm/checkoutForm.types'
import { ordersAPI } from 'config/axios'
import { OrderResponse, OrdersResponse } from 'config/axios/axios.types'

export const createOrder = async (token: string, data: Order) => {
  const response = await ordersAPI.post<OrderResponse>('', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return response.data
}

export const getOrders = async (
  token: string | undefined,
  id: number | undefined,
  page: number,
  perPage = 8,
) => {
  const response = await ordersAPI.get<OrdersResponse>(
    `?filters[user_id][$eq]=${id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${perPage}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
  return response.data
}

export const getOrder = async (
  token: string | undefined,
  id: string | undefined,
) => {
  const response = await ordersAPI.get<OrderResponse>(`/${id}?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
  return response.data
}
