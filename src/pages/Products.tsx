import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Product from '../components/Product'
import PaginationButton from '../components/UI/PaginationButton'
import { ProductType } from '../types/ProductTypes'
import { getProducts } from '../utils/getProducts'

const Products = () => {
  const [page, setPage] = useState(1)

  const { isLoading, isError, data } = useQuery({
    queryKey: ['products', page],
    queryFn: () => getProducts(page),
    keepPreviousData: true,
  })

  const products = data?.data.list as ProductType[]

  const totalPages = data?.data.meta.pages as number

  const onSetPage = (index: number): void => {
    if (page !== index + 1) {
      setPage(index + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return <h2 className='text-center text-2xl'>Loading...</h2>
  }

  if (isError) {
    return <h2 className='text-center text-2xl'>An error occured. Could not fetch products.</h2>
  }

  return (
    <section className='mx-auto my-10 flex w-4/5 flex-col items-start justify-start gap-12 self-stretch sm:w-3/5 md:w-4/5'>
      <div className='flex w-full flex-col'>
        <h1 className='self-start text-4xl font-normal'>Products</h1>
        <span className='mb-5 h-1 w-full border-b border-gray-400'></span>
      </div>
      <div className='mx-auto grid w-full grid-cols-repeat place-items-center gap-10'>
        {products?.map((product: ProductType) => (
          <Product
            key={product.name}
            price={product.price}
            image={product.image}
            name={product.name}
            currency={product.currency}
          />
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationButton key={i} onClickHandler={() => onSetPage(i)}>
            {i + 1}
          </PaginationButton>
        ))}
      </div>
    </section>
  )
}

export default Products
