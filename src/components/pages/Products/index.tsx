import PaginationButtons from 'components/molecules/PaginationButtons'
import Product from 'components/organisms/Product'

import useProducts from './useProducts'

const Products = () => {
  const {
    isLoading,
    isError,
    products,
    totalPages,
    currentPage,
    onPageChange,
  } = useProducts()

  if (isLoading) {
    return <h2 className='text-center text-2xl'>Loading...</h2>
  }

  if (isError) {
    return (
      <h2 className='text-center text-2xl'>
        An error occured. Could not fetch products.
      </h2>
    )
  }

  return (
    <section className='mx-auto my-10 flex w-4/5 flex-col items-start justify-start gap-12 self-stretch sm:w-3/5 md:w-4/5'>
      <div className='flex w-full flex-col'>
        <h1 className='self-start text-4xl font-normal'>Products</h1>
        <span className='mb-5 h-1 w-full border-b border-gray-400'></span>
      </div>
      <div className='mx-auto grid w-full grid-cols-repeat place-items-center gap-10'>
        {products?.map(({ id, attributes }) => (
          <Product
            key={id}
            id={id}
            price={attributes.price}
            img={attributes.img.data.attributes.url}
            title={attributes.title}
            currency={attributes.currency}
          />
        ))}
      </div>
      {totalPages && (
        <PaginationButtons
          pageCount={totalPages}
          forcePage={currentPage}
          onChange={onPageChange}
        />
      )}
    </section>
  )
}

export default Products
