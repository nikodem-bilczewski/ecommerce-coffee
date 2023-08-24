import { Order } from 'components/molecules/CheckoutForm/checkoutForm.types'
import { ordersAPI } from 'config/axios'
import { OrderResponse, OrdersResponse } from 'config/axios/axios.types'

import { orderResponseSchema, ordersResponseSchema } from './ordersSchema'

export const createOrder = async (data: Order) => {
  const response = await ordersAPI.post<OrderResponse>('', data, {})
  return response.data
}

export const getOrders = async (
  id: number | undefined,
  page: number,
  perPage = 8,
) => {
  const response = await ordersAPI.get<OrdersResponse>(
    `?filters[user_id][$eq]=${id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${perPage}`,
  )
  const parsedResponse = ordersResponseSchema.parse(response.data)

  return parsedResponse
}

export const getOrder = async (id: string | undefined) => {
  const response = await ordersAPI.get<OrderResponse>(`/${id}?populate=*`, {})

  const parsedResponse = orderResponseSchema.parse(response.data)

  return parsedResponse.data
}
