import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormInput } from './checkoutForm.types'
import { checkoutSchema } from './checkoutSchema'

const useCheckoutForm = () => {
  const methods = useForm<FormInput>({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = async (userData) => {
    console.log(userData)
  }

  return { methods, onSubmit }
}

export default useCheckoutForm
