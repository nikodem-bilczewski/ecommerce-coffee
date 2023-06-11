import { useContext } from 'react'

import { CartContext } from 'contexts/CartContext'

const useCartContext = () => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('cartContext data is missing!')
  }

  return cartContext
}

export default useCartContext
