import { FormInput } from 'components/molecules/AuthForm/AuthForm.types'
import { authAPI } from 'config/axios'
import { AuthResponse } from 'config/axios/axios.types'

export const signUpFn = async (userData: FormInput): Promise<AuthResponse> => {
  const response = await authAPI.post('/register', userData)
  return response.data
}

export const logInFn = async (userData: FormInput): Promise<AuthResponse> => {
  const response = await authAPI.post('/login', userData)
  return response.data
}
