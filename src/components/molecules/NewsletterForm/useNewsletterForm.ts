import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import { sendEmail } from 'services/email'

import { FormInput } from './newsletterForm.types'
import { newsletterSchema } from './newsletterSchema'

const useNewsletterForm = () => {
  const { mutate, isLoading, isSuccess, isError } = useMutation(sendEmail, {
    onSuccess: () => {
      methods.reset()
    },
  })

  const methods = useForm<FormInput>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = async (formData) => {
    mutate(formData)
  }

  return { methods, onSubmit, isLoading, isSuccess, isError }
}

export default useNewsletterForm
