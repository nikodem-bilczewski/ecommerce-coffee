import { AuthResponse } from 'config/axios/axios.types'

export interface IUser {
  jwt: string
  user: {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
  }
}

export type User = IUser | null

export interface IAuthContext {
  user: User
  logIn: (userData: AuthResponse) => void
  logOut: () => void
}
