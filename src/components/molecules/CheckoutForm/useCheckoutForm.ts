/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import getCurrentDate from 'utils/getCurrentDate'

import useAuthContext from 'contexts/AuthContext/useAuthContext'
import useCartContext from 'contexts/CartContext/useCartContext'
import { createOrder } from 'services/orders'

import { cartToProductsTransform } from './cartToProductsTransform'
import { FormInput, Order } from './checkoutForm.types'
import { checkoutSchema } from './checkoutSchema'

const useCheckoutForm = () => {
  const { user } = useAuthContext()
  const { cart, totalPrice, clearCart } = useCartContext()

  const { mutate, isLoading, isSuccess, isError } = useMutation(createOrder, {
    onSuccess: () => {
      methods.reset()
      clearCart()
    },
  })

  const methods = useForm<FormInput>({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit = async () => {
    if (user) {
      const { id } = user.user
      const date = getCurrentDate()
      const products = cartToProductsTransform(cart)

      const order: Order = {
        data: {
          total: totalPrice,
          currency: 'PLN',
          date,
          user_id: id,
          products,
        },
      }

      mutate(order)
    } else {
      methods.reset()
      clearCart()
    }
  }

  return { methods, onSubmit, isLoading, isSuccess, isError }
}

export default useCheckoutForm
