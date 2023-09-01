import axios from 'axios'

import { User } from 'contexts/AuthContext/AuthContext.types'

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
  headers: {
    'Content-Type': 'application/json',
  },
})

export const emailAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/email',
})

ordersAPI.interceptors.request.use((config) => {
  const user: User = JSON.parse(localStorage.getItem('user') || '')
  const token = user?.jwt

  if (user && token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})
