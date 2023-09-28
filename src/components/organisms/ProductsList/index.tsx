import Filters from 'components/molecules/Filters'
import PaginationButtons from 'components/molecules/PaginationButtons'
import Product from 'components/molecules/Product'
import Spinner from 'components/molecules/Spinner'

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
    return <Spinner />
  }

  if (isError) {
    return (
      <h2 className='text-center text-2xl'>
        An error occured. Could not fetch products.
      </h2>
    )
  }

  return (
    <section className='mx-auto w-full'>
      <Filters
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className='mx-auto my-10 flex w-full flex-col items-start justify-start gap-12 self-stretch'>
        <div className='mx-auto grid w-full grid-cols-repeat place-items-center gap-10'>
          {products?.map((product) => (
            <Product key={product.id} product={product} />
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
