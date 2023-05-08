import axios from 'axios'

import { FormInput } from 'components/molecules/Form'
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

const authAPI = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true,
})

authAPI.defaults.headers.common['Content-Type'] = 'application/json'

interface GenericResponse {
  accessToken: string
  refreshToken: string
}

export const signUpFn = async (user: FormInput): Promise<GenericResponse> => {
  const response = await authAPI.post('/register', user)
  console.log(response.data)
  return response.data
}
