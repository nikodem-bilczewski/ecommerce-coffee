import { Product } from 'components/organisms/ProductsList/Products.types'

export type CartItem = {
  item: Product
  quantity: number
  id: number
}

export type CartContextType = {
  cart: CartItem[]
  isOpen: boolean
  totalPrice: number
  totalItems: number
  toggleCart: () => void
  addItem: (item: CartItem, quantity?: number) => void
  updateItem: (id: number, quantity: number) => void
  deleteItem: (id: number) => void
  clearCart: () => void
}
