import axios from 'axios'

export const productsAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
})
