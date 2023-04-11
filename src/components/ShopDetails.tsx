const ShopDetails = () => {
  return (
    <section className='mx-auto my-10 grid w-4/5 gap-7 md:my-14 md:grid-cols-2 '>
      <div className='flex w-full items-center justify-center gap-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-16 w-16 md:h-28 md:w-28'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
          />
        </svg>
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>Worldwide shipping</h4>
      </div>
      <div className='flex w-full items-center justify-center gap-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-16 w-16 md:h-28 md:w-28'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
          />
        </svg>
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>Best customer service</h4>
      </div>
      <div className=' flex w-full items-center justify-center gap-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-16 w-16 md:h-28 md:w-28'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
          Multiple payment methods
        </h4>
      </div>
      <div className=' flex w-full items-center justify-center gap-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-16 w-16 md:h-28 md:w-28'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181'
          />
        </svg>
        <h4 className='text-2xl font-extralight md:text-4xl md:font-thin'>
          Lowest prices on market
        </h4>
      </div>
    </section>
  )
}

export default ShopDetails
