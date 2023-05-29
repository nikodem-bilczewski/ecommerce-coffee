import { Link } from 'react-router-dom'

import Button from 'components/molecules/Button'

import { ProductProps } from './Product.types'

const Product = ({ id, title, img, price, currency }: ProductProps) => (
  <div className='grid gap-2 rounded-lg bg-stone-200 p-5 shadow-xl'>
    <Link
      className='mb-10'
      to={`/products/${id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img
        src={import.meta.env.VITE_BASE_URL + img}
        className='mb-2 aspect-[1/1] h-full w-full rounded-md object-fill object-center'
      />

      <h3 className='text-3xl'>{title}</h3>
    </Link>
    <p className='mb-1 mt-6 text-2xl font-light'>
      {price} {currency}
    </p>
    <Button tertiary>Add to cart</Button>
  </div>
)

export default Product
