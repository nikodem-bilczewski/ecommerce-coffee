import ProductList from 'components/organisms/ProductsList'

const Products = () => (
  <div className='w-full mx-auto'>
    <div className='flex w-4/5 mt-20 flex-col mx-auto'>
      <h1 className='self-start text-4xl font-normal'>Products</h1>
      <span className='mb-5 h-1 w-full border-b border-gray-400'></span>
    </div>
    <ProductList />
  </div>
)

export default Products
