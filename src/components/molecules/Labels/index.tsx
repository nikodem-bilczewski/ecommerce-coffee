const Labels = () => (
  <div className='hidden sm:flex sm:justify-between sm:items-center md:text-2xl md:font-light text-xl text-gray-800 '>
    <span>Item</span>
    <div className='flex items-center justify-between gap-24'>
      <span>Quantity</span>
      <div className='flex gap-36 pr-2'>
        <span>Price</span>
        <span>Total</span>
      </div>
    </div>
  </div>
)

export default Labels
