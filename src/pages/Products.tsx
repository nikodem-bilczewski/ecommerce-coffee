import Product from '../components/Product'

const Products = () => {
  return (
    <section className='mx-auto my-10 flex w-4/5 flex-col items-center gap-12'>
      <div className='flex w-full flex-col'>
        <h1 className='self-start text-4xl font-normal'>Products</h1>
        <span className='h-1 w-full border-b border-gray-400'></span>
      </div>
      <div className='mx-auto grid w-full grid-cols-repeat place-items-center gap-10'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}

export default Products
