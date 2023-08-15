import { CartProduct } from 'components/molecules/CheckoutForm/checkoutForm.types'

export type OrderDetailsProps = {
  date: string | undefined
  total: number | undefined
  totalItems: number | undefined
  currency: string | undefined
  products: CartProduct[] | undefined
}
