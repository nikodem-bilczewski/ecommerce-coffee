import { ReactNode, createContext, useEffect, useState } from 'react'

import { CartContextType, CartItem } from './CartContext.types'

export const CartContext = createContext<CartContextType | null>(null)

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const storedCart = localStorage.getItem('cart')
  const initialCart: CartItem[] = storedCart ? JSON.parse(storedCart) : []

  const [cart, setCart] = useState<CartItem[]>(initialCart)

  const [isOpen, setIsOpen] = useState(false)

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.item.attributes.price * curr.quantity,
    0,
  )

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const addItem = (item: CartItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        )
        return updatedCart
      })
    } else {
      setCart((prevCart) => [...prevCart, item])
    }
  }

  const updateItem = (id: number, quantity: number) => {
    if (quantity > 0) {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)),
      )
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    }
  }

  const deleteItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        totalPrice,
        totalItems,
        toggleCart,
        addItem,
        updateItem,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider
