/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link } from 'react-router-dom'

import Button from 'components/molecules/Button'
import useAuthContext from 'contexts/AuthContext/useAuthContext'

const UserProfile = () => {
  const { user, logOut } = useAuthContext()
  const username = user?.user?.username ?? ''
  return (
    <div className='flex flex-col justify-between  h-screen w-full mx-auto px-6 lg:px-8'>
      <div className='flex w-full md:w-4/5 mt-16 flex-col mx-auto'>
        <div className='flex justify-between'>
          <h1 className='self-start text-4xl font-normal'>Profile</h1>
          <div className='w-40'>
            <Button secondary onClick={logOut}>
              Logout
            </Button>
          </div>
        </div>
        <span className='mb-5 h-1 w-full border-b border-gray-400'></span>
        <div className='text-2xl w-full mx-auto'>
          <h2>Hello {username}</h2>
        </div>
      </div>
      <div>
        <div className='w-60 lg:w-80 mx-auto mb-40'>
          <Link to='/products'>
            <Button secondary>Check our shop</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
