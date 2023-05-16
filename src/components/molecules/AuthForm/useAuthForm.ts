import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthContext from 'components/shared/AuthContext'
import { logInFn, signUpFn } from 'config/axios/axios'

import { AuthFormProps, FormInput } from './AuthForm.types'
import { authSchema } from './authSchema'

const useAuthForm = ({ isLogInForm = false }: AuthFormProps) => {
  const { logIn } = useContext(AuthContext)

  const mutationFn = isLogInForm ? logInFn : signUpFn
  console.log(mutationFn)
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

  const { reset, handleSubmit } = methods

  const onSubmit: SubmitHandler<FormInput> = async (userData) => {
    performMutation(userData)
    reset()
  }

  return {
    methods,
    handleSubmit,
    onSubmit,
    isLoading,
    isError,
  }
}

export default useAuthForm
