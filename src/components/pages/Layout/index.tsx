import classNames from 'classnames'
import { Outlet } from 'react-router-dom'

import Overlay from 'components/atoms/Overlay'
import Cart from 'components/organisms/Cart'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import useCartContext from 'contexts/CartContext/useCartContext'

const Layout = () => {
  const { isOpen } = useCartContext()

  const classes = classNames(
    'flex min-h-screen w-full flex-col justify-between',
    {
      'fixed h-screen': isOpen,
    },
  )

  return (
    <div className={classes}>
      {isOpen && <Overlay />}
      <Cart />
      <Header />
      <main className='pt-24'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
