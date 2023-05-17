import Button from 'components/molecules/Button'

import { ProductProps } from './Product.types'

const Product = ({ name, image, price, currency }: ProductProps) => (
  <div className='grid gap-2 rounded-lg bg-stone-200 p-5 shadow-xl'>
    <img
      src={image}
      className='mb-4 aspect-[1/1] h-full w-full rounded-md object-fill object-center'
    />
    <h3 className='text-3xl'>{name}</h3>
    <p className='mb-1 text-2xl font-light'>
      {price} {currency}
    </p>
    <Button tertiary>Add to cart</Button>
  </div>
)

export default Product
