import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import IconWrapper from 'components/atoms/IconWrapper'
import Button from 'components/molecules/Button'
import AuthContext from 'components/shared/AuthContext'

const NavigationIcons = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='flex items-center justify-center gap-5'>
      <IconWrapper>
        <ShoppingCartIcon className='h-8 w-8 lg:h-10 lg:w-10' />
      </IconWrapper>
      {user ? (
        <Button secondary onClick={logOut}>
          Logout
        </Button>
      ) : (
        <IconWrapper>
          <Link to='login'>
            <UserIcon className='h-8 w-8 lg:h-10 lg:w-10' />
          </Link>
        </IconWrapper>
      )}
    </div>
  )
}

export default NavigationIcons
