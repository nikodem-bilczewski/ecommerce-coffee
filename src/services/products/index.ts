import {
  ProductResponse,
  ProductsResponse,
} from 'components/organisms/ProductsList/Products.types'
import { productsAPI } from 'config/axios'

export const getProducts = async (
  page: number,
  selectedCategory: string,
  perPage = 6,
) => {
  const response = await productsAPI.get<ProductsResponse>(
    `?populate=*&pagination[page]=${page}&pagination[pageSize]=${perPage}&filters[category][$containsi]=${selectedCategory}`,
  )
  return response.data
}

export const getProduct = async (id: string | undefined) => {
  const response = await productsAPI.get<ProductResponse>(`/${id}?populate=*`)
  return response.data
}
