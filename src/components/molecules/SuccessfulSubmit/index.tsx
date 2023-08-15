import { Link } from 'react-router-dom'

import Button from 'components/molecules/Button'

const SuccessfulSubmit = () => (
  <div className='flex w-1/2 justify-center items-center flex-col gap-5 mx-auto'>
    <div className='text-center'>
      <h2 className='text-3xl font-medium'>Thank you for the order.</h2>
      <p className='text-xl'>Great choice!</p>
    </div>
    <div className='flex flex-col w-3/5 gap-5'>
      <Link to='/products'>
        <Button secondary>Continue shopping</Button>
      </Link>
      <Link to='/'>
        <Button secondary>Home page</Button>
      </Link>
    </div>
  </div>
)

export default SuccessfulSubmit
