import { ProductDetailsProps } from './ProductDetails.types'

const ProductDetails = ({
  title,
  description,
  price,
  btnText,
  img,
}: ProductDetailsProps) => (
  <div className=' mx-auto my-28 flex  w-4/5 flex-col gap-7 rounded-lg bg-stone-200 p-7 shadow-xl sm:w-2/3 lg:w-4/5 lg:flex-row xl:w-3/5'>
    <img
      className=' aspect-[1/1] h-full w-full rounded-md object-fill object-center md:mb-0 md:max-w-xl '
      src={img}
    />
    <div className='flex flex-col justify-between'>
      <div>
        <h2 className='mb-4 text-4xl'>{title}</h2>
        <p className='mb-6 text-2xl font-light'>{description}</p>
        <p>{price}</p>
        <div className='mb-8 flex items-center gap-4'>
          <label className='text-xl md:text-2xl' htmlFor='quantity'>
            Quantity
          </label>
          <input
            className='rounded-md px-2 py-1 text-xl outline-transparent md:text-2xl'
            id='quantity'
            type='number'
          />
        </div>
      </div>
      <button className='w-full rounded-md bg-lime-700 py-3 text-2xl text-white transition-all hover:bg-opacity-80'>
        {btnText}
      </button>
    </div>
  </div>
)

export default ProductDetails
