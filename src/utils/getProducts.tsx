import axios, { AxiosPromise } from 'axios'
import { ProductResponse } from '../types/ProductTypes'
import { API_URL } from '../constants/constants'

export const getProducts = (page: number): AxiosPromise<ProductResponse> => {
  return axios.get(`${API_URL}${page}`)
}
