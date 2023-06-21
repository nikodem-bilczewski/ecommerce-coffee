import { IUser } from 'contexts/AuthContext/AuthContext.types'

export interface AuthResponse {
  jwt: string
  user: IUser['user']
}
