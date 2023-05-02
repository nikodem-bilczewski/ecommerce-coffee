import axios, { AxiosPromise } from 'axios'
import { ProductResponse } from '../types/ProductTypes'
import { API_URL } from '../constants/constants'

export const getProducts = async (page: number): AxiosPromise<ProductResponse> => {
  const response = await axios.get(`${API_URL}${page}`)
  return response
}
