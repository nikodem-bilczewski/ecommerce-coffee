import ArrowTrendingDown from '@heroicons/react/24/outline/ArrowTrendingDownIcon'
import CurrencyEuro from '@heroicons/react/24/outline/CurrencyEuroIcon'
import FaceSmileIcon from '@heroicons/react/24/outline/FaceSmileIcon'
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon'

const ShopDetails = () => (
  <section className='my-14'>
    <h2 className='text-5xl font-light md:text-6xl'>Why us?</h2>
    <div className='mx-auto my-10 grid w-4/5 gap-7 md:my-14 md:grid-cols-2 '>
      <div className='flex w-full items-center justify-center gap-5'>
        <GlobeAltIcon className='h-16 w-16 md:h-28 md:w-28' />
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
          Worldwide shipping
        </h4>
      </div>
      <div className='flex w-full items-center justify-center gap-5'>
        <FaceSmileIcon className='h-16 w-16 md:h-28 md:w-28' />
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
          Best customer service
        </h4>
      </div>
      <div className=' flex w-full items-center justify-center gap-5'>
        <CurrencyEuro className='h-16 w-16 md:h-28 md:w-28' />
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
          Multiple payment methods
        </h4>
      </div>
      <div className=' flex w-full items-center justify-center gap-5'>
        <ArrowTrendingDown className='h-16 w-16 md:h-28 md:w-28' />
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
          Lowest prices on market
        </h4>
      </div>
    </div>
  </section>
)

export default ShopDetails
