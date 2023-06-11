import { Outlet } from 'react-router-dom'

import Overlay from 'components/atoms/Overlay'
import Cart from 'components/organisms/Cart'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import useCartContext from 'contexts/CartContext/useCartContext'

const Layout = () => {
  const { isOpen } = useCartContext()
  return (
    <div
      className={`${
        isOpen ? 'fixed h-screen' : ''
      }flex min-h-screen w-full flex-col justify-between`}
    >
      {isOpen && <Overlay />}
      <Cart />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
