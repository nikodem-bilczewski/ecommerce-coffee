import { CartProduct } from 'components/molecules/CheckoutForm/checkoutForm.types'

export type OrderDetailsProps = {
  date: string
  total: number
  totalItems: number
  currency: string
  products: CartProduct[]
}
