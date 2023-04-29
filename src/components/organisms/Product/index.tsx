import { ProductPropType } from 'components/organisms/Product/Product.types'
import Button from 'components/atoms/Button'

const Product = ({ name, image, price, currency }: ProductPropType) => (
  <div className='grid gap-2 rounded-lg bg-stone-200 p-5 shadow-xl'>
    <img
      src={image}
      className='mb-4 aspect-[1/1] h-full w-full rounded-md object-fill object-center'
    />
    <h3 className='text-3xl'>{name}</h3>
    <p className='mb-1 text-2xl font-light'>
      {price} {currency}
    </p>
    <Button cartButton>Add to cart</Button>
  </div>
)

export default Product
