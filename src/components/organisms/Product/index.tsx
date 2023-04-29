import { ProductPropType } from 'components/organisms/Product/Product.types'

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
    <button className='w-full rounded-md bg-lime-700 py-3 text-2xl text-white transition-all hover:bg-opacity-80'>
      Add to cart
    </button>
  </div>
)

export default Product
