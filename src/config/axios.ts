import axios from 'axios'

import { ProductResponse } from 'components/pages/Products/Products.types'

const productsAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const getProducts = async (
  page: number,
  perPage = 6,
): Promise<ProductResponse> => {
  const response = await productsAPI.get(
    `api/products?perPage=${perPage}&page=${page}`,
  )
  return response.data
}
