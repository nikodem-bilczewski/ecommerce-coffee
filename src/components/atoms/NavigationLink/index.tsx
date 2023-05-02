import { NavLink } from 'react-router-dom'

import { NavigationLinkProps } from './NavigationLink.types'

const NavigationLink = ({ navigateTo, children }: NavigationLinkProps) => (
  <NavLink to={navigateTo} className='nav-link hover:bg-opacity-10'>
    {children}
  </NavLink>
)

export default NavigationLink
