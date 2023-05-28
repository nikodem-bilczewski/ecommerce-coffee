import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getProduct } from 'services/products'

import Button from 'components/molecules/Button'

const ProductDetails = () => {
  const { id } = useParams()

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })

  if (isLoading) {
    return <h2 className='text-center text-2xl'>Loading...</h2>
  }

  if (isError) {
    return (
      <h2 className='text-center text-2xl'>
        An error occured. Could not fetch product.
      </h2>
    )
  }

  return (
    <div className='flex flex-col my-8 w-4/5 mx-auto'>
      <div className='mx-auto my-20 md:my-26 lg:my-28 flex w-full flex-col gap-7 rounded-lg bg-stone-200 p-7 shadow-xl  lg:flex-row'>
        <img
          className=' aspect-[1/1] h-full w-full rounded-md object-fill object-center md:mb-0 md:max-w-xl '
          src={
            import.meta.env.VITE_BASE_URL +
            product?.data.attributes.img.data.attributes.url
          }
        />
        <div className='flex flex-col justify-between'>
          <div>
            <h2 className='mb-4 text-4xl md:text-5xl'>
              {product?.data.attributes.title}
            </h2>
            <p className='mb-6 text-2xl font-light'>
              {product?.data.attributes.description}
            </p>
            <p className='text-3xl'>
              <span className='mr-2'>{product?.data.attributes.price}</span>
              {product?.data.attributes.currency}
            </p>
            <form className='my-8 flex items-center gap-4'>
              <label
                className='text-xl font-normal md:text-2xl'
                htmlFor='quantity'
              >
                Quantity
              </label>
              <input
                className='rounded-md px-2 py-1 text-xl outline-transparent md:text-2xl'
                id='quantity'
                type='number'
              />
            </form>
          </div>
          <Button tertiary>Add to cart</Button>
        </div>
      </div>
      <Link to='/products'>
        <Button secondary>Back</Button>
      </Link>
    </div>
  )
}
export default ProductDetails
