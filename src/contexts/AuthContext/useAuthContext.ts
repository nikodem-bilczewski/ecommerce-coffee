import { useContext } from 'react'

import { AuthContext } from 'contexts/AuthContext'

const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('authContext data is missing!')
  }

  return authContext
}

export default useAuthContext
