import NavigationLink from 'components/atoms/NavigationLink'

import useNavigationButtons from './useNavigationButtons'

const NavigationButtons = () => {
  const navButtons = useNavigationButtons()

  return (
    <nav>
      <ul className='hidden md:flex justify-center'>
        {navButtons &&
          navButtons.map(({ navigateTo, btnText }) => (
            <li key={navigateTo}>
              <NavigationLink navigateTo={navigateTo}>{btnText}</NavigationLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default NavigationButtons
