import { TypeOf } from 'zod'

import { checkoutSchema } from './checkoutSchema'

export type FormInput = TypeOf<typeof checkoutSchema>

export interface CartProduct {
  title: string
  price: number
  quantity: number
  total: number
  img: string
}

export interface OrderDetails {
  total: number
  currency: string
  date: string
  user_id: number
  products: CartProduct[]
}

export interface Order {
  data: OrderDetails
}
