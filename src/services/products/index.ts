import { ProductResponse } from 'components/pages/Products/Products.types'
import { productsAPI } from 'config/axios'

export const getProducts = async (page: number, perPage = 6) => {
  const response = await productsAPI.get<ProductResponse>(
    `api/products?perPage=${perPage}&page=${page}`,
  )
  return response.data
}
