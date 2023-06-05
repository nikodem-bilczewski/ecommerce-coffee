import { AuthResponse } from 'config/axios/axios.types'

export type User = string | null

export interface IAuthContext {
  user: User
  logIn: (userData: AuthResponse) => void
  logOut: () => void
}
