import axios from 'axios'

import { FormInput } from 'components/molecules/AuthForm/AuthForm.types'
import { ProductResponse } from 'components/pages/Products/Products.types'

import { AuthResponse } from './axios.types'

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
})

authAPI.defaults.headers.common['Content-Type'] = 'application/json'

export const signUpFn = async (userData: FormInput): Promise<AuthResponse> => {
  const response = await authAPI.post('/register', userData)
  return response.data
}

export const logInFn = async (userData: FormInput): Promise<AuthResponse> => {
  const response = await authAPI.post('/login', userData)
  return response.data
}
