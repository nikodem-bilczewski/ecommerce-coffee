/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwtDecode from 'jwt-decode'
import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router'

import { AuthResponse } from 'config/axios/axios.types'

import { IAuthContext, User } from './AuthContext.types'

export const AuthContext = createContext<IAuthContext>({
  user: null,
  logIn: () => undefined,
  logOut: () => undefined,
})

const getUser = (): string | null => {
  if (localStorage.getItem('tokens')) {
    const tokens = JSON.parse(localStorage.getItem('tokens')!)
    return jwtDecode(tokens.accessToken)
  }
  return null
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(() => getUser())

  const navigate = useNavigate()

  const logIn = (userData: AuthResponse) => {
    localStorage.setItem('tokens', JSON.stringify(userData))
    setUser(jwtDecode(userData.accessToken!))
    navigate('/')
  }

  const logOut = () => {
    localStorage.removeItem('tokens')
    setUser(null)
    window.location.reload()
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
