import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'

import Logo from 'components/atoms/Logo'
import DropdownMenu from 'components/molecules/DropdownMenu'
import NavigationButtons from 'components/molecules/NavigationButtons'
import NavigationIcons from 'components/molecules/NavigationIcons'

import useHeader from './useHeader'

const Header = () => {
  const { isOpen, headerRef, toggleMenu } = useHeader()

  return (
    <div ref={headerRef}>
      <header className='fixed z-10 mx-auto flex h-24 w-full items-center justify-between border-b border-b-gray-500 bg-stone-400 p-7 xl:p-9'>
        <Logo />
        <NavigationButtons />
        <div className='hidden md:flex'>
          <NavigationIcons />
        </div>
        <div onClick={toggleMenu} className='md:hidden'>
          {isOpen ? (
            <XMarkIcon className='menu-icon' />
          ) : (
            <Bars3Icon className='menu-icon' />
          )}
        </div>
      </header>
      {isOpen && <DropdownMenu onClick={toggleMenu} />}
    </div>
  )
}

export default Header
