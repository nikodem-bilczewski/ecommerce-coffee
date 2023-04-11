import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div className='flex h-screen w-full flex-col justify-between'>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
