import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type NavigationLinkProps = {
  children: ReactNode
  navigateTo: string
}

const NavigationLink = ({ navigateTo, children }: NavigationLinkProps) => (
  <NavLink to={navigateTo} className='nav-link hover:bg-opacity-10'>
    {children}
  </NavLink>
)

export default NavigationLink
