import ProductList from 'components/organisms/ProductsList'

const Products = () => (
  <div className='flex flex-col w-full px-10 md:px-0 md:w-4/5 mx-auto py-10'>
    <div className='pb-10  text-center'>
      <h1 className='mb-5 text-5xl font-bold text-center lg:text-6xl'>
        Products
      </h1>
      <h2 className='mb:font-thin text-3xl font-extralight xl:text-4xl '>
        Explore our handpicked selection of exquisite coffee beans from around
        the globe, meticulously roasted to perfection. Dive into our array of
        premium coffee accessories, from grinders to mugs, designed to elevate
        your brew.
      </h2>
    </div>
    <ProductList />
  </div>
)

export default Products
