import { Outlet } from 'react-router-dom'

import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'

const Layout = () => (
  <div className='flex min-h-screen w-full flex-col justify-between'>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout
