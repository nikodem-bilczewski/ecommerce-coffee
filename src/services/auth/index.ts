import { LogInFormInput } from 'components/molecules/LogInForm/LogInForm.types'
import { SignUpFormInput } from 'components/molecules/SignUpForm/SignUpForm.types'
import { authAPI } from 'config/axios'
import { AuthResponse } from 'config/axios/axios.types'

export const signUpFn = async (
  userData: SignUpFormInput,
): Promise<AuthResponse> => {
  const response = await authAPI.post('/local/register', userData)
  return response.data
}

export const logInFn = async (
  userData: LogInFormInput,
): Promise<AuthResponse> => {
  const response = await authAPI.post('/local', userData)
  return response.data
}
