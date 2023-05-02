import useShopDetails from './useShopDetails'

const ShopDetails = () => {
  const details = useShopDetails()
  return (
    <section className='my-14'>
      <h2 className='text-5xl font-light md:text-6xl'>Why us?</h2>
      <div className='mx-auto my-10 grid w-4/5 gap-7 md:my-14 md:grid-cols-2 '>
        {details &&
          details.map(({ Icon, description }) => (
            <div
              key={description}
              className='flex w-full items-center justify-center gap-5'
            >
              <Icon className='h-16 w-16 md:h-28 md:w-28' />
              <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
                {description}
              </h4>
            </div>
          ))}
      </div>
    </section>
  )
}

export default ShopDetails
