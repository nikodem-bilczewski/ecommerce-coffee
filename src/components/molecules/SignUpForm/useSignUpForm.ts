import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuthContext from 'contexts/AuthContext/useAuthContext'
import { signUpFn } from 'services/auth'

import { SignUpFormInput } from './SignUpForm.types'
import { signUpSchema } from './signupSchema'

const useAuthForm = () => {
  const { logIn } = useAuthContext()

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: signUpFn,
    onSuccess: (userData) => {
      logIn(userData)
      methods.reset()
    },
  })

  const methods = useForm<SignUpFormInput>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<SignUpFormInput> = async (userData) => {
    mutate(userData)
  }

  return {
    methods,
    onSubmit,
    isLoading,
    isError,
  }
}

export default useAuthForm
