import { Link } from 'react-router-dom'

import useNavigationButtons from 'components/molecules//NavigationButtons/useNavigationButtons'
import NavigationIcons from 'components/molecules/NavigationIcons'

const DropdownMenu = ({ clickHandler }: { clickHandler: VoidFunction }) => {
  const navButtons = useNavigationButtons()
  return (
    <div className='fixed top-24 pb-4 flex flex-col gap-2 w-full z-10 shadow-md bg-stone-400 md:hidden'>
      <div className='flex flex-col w-full'>
        {navButtons.map(({ navigateTo, btnText }) => (
          <Link
            onClick={clickHandler}
            className='w-full py-2 mx-auto text-center rounded-md text-2xl font-light hover:bg-black hover:bg-opacity-10'
            key={btnText}
            to={navigateTo}
          >
            {btnText}
          </Link>
        ))}
      </div>
      <div onClick={clickHandler}>
        <NavigationIcons />
      </div>
    </div>
  )
}
export default DropdownMenu
