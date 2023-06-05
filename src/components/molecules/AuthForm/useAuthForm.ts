import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { logInFn, signUpFn } from 'services/auth'
import { AuthContext } from 'shared/AuthContext'

import { AuthFormProps, FormInput } from './AuthForm.types'
import { authSchema } from './authSchema'

const useAuthForm = ({ isLogInForm = false }: AuthFormProps) => {
  const { logIn } = useContext(AuthContext)

  const mutationFn = isLogInForm ? logInFn : signUpFn

  const {
    mutate: performMutation,
    isLoading,
    isError,
  } = useMutation({
    mutationFn,
    onSuccess: (userData) => {
      logIn(userData)
    },
  })

  const methods = useForm<FormInput>({
    resolver: zodResolver(authSchema),
  })

  const onSubmit: SubmitHandler<FormInput> = async (userData) => {
    performMutation(userData)
    methods.reset()
  }

  return {
    methods,
    onSubmit,
    isLoading,
    isError,
  }
}

export default useAuthForm
