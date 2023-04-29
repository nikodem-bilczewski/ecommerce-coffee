import Logo from 'components/atoms/Logo'
import NavigationButtons from 'components/molecules/NavigationButtons'
import NavigationIcons from 'components/molecules/NavigationIcons'

const Header = () => (
  <header className='mx-auto flex h-24 w-full items-center justify-between border-b border-b-gray-500 bg-stone-400 px-7  xl:p-4'>
    <Logo />
    <NavigationButtons />
    <NavigationIcons />
  </header>
)

export default Header
