import { ReactNode, createContext, useCallback, useState } from 'react'
import { useNavigate } from 'react-router'

import { AuthResponse } from 'config/axios/axios.types'

import { IAuthContext, User } from './AuthContext.types'

export const AuthContext = createContext<IAuthContext | null>(null)

const getUser = (): User => {
  const userData = localStorage.getItem('user')
  return userData ? JSON.parse(userData) : null
}

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(() => getUser())

  const navigate = useNavigate()

  const logIn = useCallback((userData: AuthResponse) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    navigate('/')
  }, [])

  const logOut = useCallback(() => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }, [])

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
