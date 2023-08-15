import axios from 'axios'

export const productsAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/items',
})

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/auth',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const ordersAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/orders',
})
