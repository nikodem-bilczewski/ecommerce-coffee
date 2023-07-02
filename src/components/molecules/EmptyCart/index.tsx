import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/molecules/Button'

const EmptyCart = () => (
  <div className='flex flex-col gap-10 mx-auto xl:w-1/2 '>
    <h1 className='text-3xl text-center'>Your cart is empty</h1>
    <div className='w-80 lg:w-96 mx-auto'>
      <Link to='/products'>
        <Button secondary>Check our products</Button>
      </Link>
    </div>
  </div>
)

export default EmptyCart
