import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuthContext from 'contexts/AuthContext/useAuthContext'
import { logInFn, signUpFn } from 'services/auth'

import { AuthFormProps, FormInput } from './AuthForm.types'
import { authSchema } from './authSchema'

const useAuthForm = ({ isLogInForm = false }: AuthFormProps) => {
  const { logIn } = useAuthContext()

  const mutationFn = isLogInForm ? logInFn : signUpFn

  const {
    mutate: performMutation,
    isLoading,
    isError,
  } = useMutation({
    mutationFn,
    onSuccess: (userData) => {
      logIn(userData)
      methods.reset()
    },
  })

  const methods = useForm<FormInput>({
    resolver: zodResolver(authSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = async (userData) => {
    performMutation(userData)
  }

  return {
    methods,
    onSubmit,
    isLoading,
    isError,
  }
}

export default useAuthForm
