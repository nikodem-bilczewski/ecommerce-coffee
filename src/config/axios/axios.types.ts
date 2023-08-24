import { CartProduct } from 'components/molecules/CheckoutForm/checkoutForm.types'
import { metaData } from 'components/organisms/ProductsList/Products.types'
import { IUser } from 'contexts/AuthContext/AuthContext.types'

export interface AuthResponse {
  jwt: string
  user: IUser['user']
}

interface OrderData {
  id: number
  attributes: {
    total: number
    createdAt: string
    updatedAt: string
    publishedAt: string
    user_id: number
    date: string
    products: CartProduct[]
    currency: string
  }
}

export interface OrderResponse {
  data: OrderData
  meta: metaData
}

export interface OrdersResponse {
  data: OrderData[]
  meta: metaData
}
