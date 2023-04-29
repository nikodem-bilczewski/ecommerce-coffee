import { Outlet } from 'react-router-dom'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

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
