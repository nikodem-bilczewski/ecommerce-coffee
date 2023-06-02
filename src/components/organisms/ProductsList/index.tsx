import Filters from 'components/molecules/Filters'
import PaginationButtons from 'components/molecules/PaginationButtons'
import Product from 'components/organisms/Product'

import useProducts from './useProducts'

const ProductList = () => {
  const {
    isLoading,
    isError,
    products,
    totalPages,
    currentPage,
    selectedCategory,
    handleCategoryChange,
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
    <section className='mx-auto w-4/5'>
      <Filters
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className='mx-auto my-10 flex w-full flex-col items-start justify-start gap-12 self-stretch'>
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
      </div>
    </section>
  )
}

export default ProductList
