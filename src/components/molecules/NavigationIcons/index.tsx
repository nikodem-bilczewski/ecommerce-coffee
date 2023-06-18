import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import { Link } from 'react-router-dom'

import IconWrapper from 'components/atoms/IconWrapper'
import useAuthContext from 'contexts/AuthContext/useAuthContext'
import useCartContext from 'contexts/CartContext/useCartContext'

const NavigationIcons = () => {
  const { user } = useAuthContext()
  const { toggleCart } = useCartContext()
  const path = user ? 'user' : 'login'
  return (
    <div className='flex items-center justify-center gap-5'>
      <IconWrapper clickHandler={toggleCart}>
        <ShoppingCartIcon className='h-8 w-8 lg:h-10 lg:w-10' />
      </IconWrapper>
      <IconWrapper>
        <Link to={path}>
          <UserIcon className='h-8 w-8 lg:h-10 lg:w-10' />
        </Link>
      </IconWrapper>
    </div>
  )
}

export default NavigationIcons
