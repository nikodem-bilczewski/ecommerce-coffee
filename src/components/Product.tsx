const Product = () => {
  return (
    <div className='flex flex-col rounded-lg bg-stone-200 p-5 shadow-xl'>
      <img
        src='https://images.unsplash.com/photo-1614792440169-b30e7f734f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
        className='mb-4 h-auto w-full rounded-md'
      />
      <h3 className='text-3xl'>Buddha filter coffee</h3>
      <p className='mb-4 text-2xl font-light'>50 PLN</p>
      <button className='w-full rounded-md bg-lime-700 py-3 text-2xl text-white transition-all hover:bg-opacity-80'>
        Add to cart
      </button>
    </div>
  )
}

export default Product
