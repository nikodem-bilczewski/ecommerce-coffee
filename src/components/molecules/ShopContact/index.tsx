import Logo from 'components/atoms/Logo'
import PhoneIcon from '@heroicons/react/24/outline/PhoneIcon'
import AtSymbolIcon from '@heroicons/react/24/outline/AtSymbolIcon'

const ShopContact = () => (
  <div className='mb-8'>
    <Logo />
    <div className='flex items-center gap-3'>
      <PhoneIcon className='h-6 w-6 lg:h-10 lg:w-10' />
      <h3 className='text-xl'>coffee@hub.com</h3>
    </div>
    <div className='flex items-center gap-3'>
      <AtSymbolIcon className='h-6 w-6 lg:h-10 lg:w-10' />
      <h3 className='text-xl'>111 222 333</h3>
    </div>
  </div>
)

export default ShopContact
