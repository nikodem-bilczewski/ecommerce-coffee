import { CartItem } from 'contexts/CartContext/CartContext.types'

import { CartProduct } from './checkoutForm.types'

export const cartToProductsTransform = (cartData: CartItem[]): CartProduct[] =>
  cartData.map((cartItem) => ({
    title: cartItem.item.attributes.title,
    price: cartItem.item.attributes.price,
    quantity: cartItem.quantity,
    total: cartItem.item.attributes.price * cartItem.quantity,
    img: '',
  }))

// cartItem.item.attributes.img.data.attributes.url
