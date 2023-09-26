import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import useAuthContext from 'contexts/AuthContext/useAuthContext'
import { logInFn } from 'services/auth'

import { LogInFormInput } from './LogInForm.types'
import { logInSchema } from './loginSchema'

const useLogInForm = () => {
  const { logIn } = useAuthContext()

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: logInFn,
    onSuccess: (userData) => {
      logIn(userData)
      methods.reset()
    },
  })

  const methods = useForm<LogInFormInput>({
    resolver: zodResolver(logInSchema),
  })

  const onSubmit: SubmitHandler<LogInFormInput> = async (userData) => {
    mutate(userData)
  }

  return {
    methods,
    onSubmit,
    isLoading,
    isError,
  }
}

export default useLogInForm
