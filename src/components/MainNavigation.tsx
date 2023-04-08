import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <header className=' bg-slate-300'>
      <nav className='flex h-24 w-full items-center justify-between bg-slate-100 px-7'>
        <h1 className='text-3xl'>COFFEE SHOP</h1>
        <ul className='flex justify-center'>
          <li>
            <NavLink to='' className='nav-link hover:bg-opacity-10'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='products' className='nav-link hover:bg-opacity-10'>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='about' className='nav-link hover:bg-opacity-10'>
              About
            </NavLink>
          </li>
        </ul>
        <div className='rounded-full bg-black bg-opacity-10 p-3 hover:bg-opacity-20'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-8 w-8 lg:h-10 lg:w-10'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default MainNavigation
