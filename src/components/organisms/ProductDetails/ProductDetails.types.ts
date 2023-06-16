import { ProductResponse } from 'components/organisms/ProductsList/Products.types'

export type ProductDetailsProps = {
  data: ProductResponse | undefined
  isLoading: boolean
  isError: boolean
  quantity: number
  handleQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
