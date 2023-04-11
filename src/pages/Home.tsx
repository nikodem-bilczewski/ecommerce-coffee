import { Link } from 'react-router-dom'
import image1 from '../assets/images/drip.jpg'
import image2 from '../assets/images/cups.jpg'
import Card from '../components/Card'
import ShopDetails from '../components/ShopDetails'

const HomePage = () => {
  return (
    <main className='mx-auto flex min-h-screen w-4/5 flex-col justify-evenly text-center'>
      <section className='my-16 mt-16 flex flex-col items-center gap-20 lg:flex-row lg:justify-center lg:gap-12'>
        <div>
          <h1 className='mb-4 text-5xl font-bold lg:text-6xl'>Welcome to Coffee Hub</h1>
          <h2 className='mb:font-thin text-3xl font-extralight xl:text-4xl '>
            We offer a wide variety of coffee blends to satisfy any coffee lover&apos;s taste buds.
            Whether you prefer a rich, bold flavor or a smooth, mild taste, we have something for
            everyone.
          </h2>
        </div>
        <Card src={image1} heading='Meet us' btnText='Check our events' path='events' />
      </section>
      <section className='my-6 flex flex-col-reverse items-center gap-20 lg:flex-row lg:justify-center lg:gap-12'>
        <Card
          src={image2}
          heading='Stay up to date'
          btnText='Join our newsletter'
          path='newsletter'
        />
        <div>
          <h2 className='mb-10 text-3xl font-extralight xl:text-4xl'>
            Browse our shop to discover our wide range of coffee brands and blends.
          </h2>
          <Link
            to='products'
            className='nav-link bg-opacity-20 hover:bg-opacity-30 lg:text-3xl lg:font-light'
          >
            Shop Now
          </Link>
        </div>
      </section>
      <section className='my-14'>
        <h2 className='text-5xl font-light md:text-6xl'>Why us?</h2>
        <ShopDetails />
      </section>
    </main>
  )
}

export default HomePage
