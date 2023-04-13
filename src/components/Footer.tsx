import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-stone-400 '>
      <div className='mx-auto mb-10 grid w-full place-items-center border-t border-t-gray-500 px-5 pt-10 text-center text-xl md:mb-16 md:grid-cols-2 xl:w-4/5'>
        <div className='mb-8'>
          <h1 className='mb-4 text-4xl lg:text-5xl'>COFFEE HUB</h1>
          <div className='flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='h-6 w-6 lg:h-10 lg:w-10'
            >
              <path
                strokeLinecap='round'
                d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
              />
            </svg>
            <h3>coffee@hub.com</h3>
          </div>
          <div className='flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='h-6 w-6 lg:h-10 lg:w-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              />
            </svg>
            <h3>111 222 333</h3>
          </div>
        </div>
        <div>
          <h2 className='mb-4 text-3xl md:mb-6 lg:text-4xl'>Informations</h2>
          <ul>
            <li className='cursor-pointer text-xl font-light transition duration-100 hover:scale-105'>
              Terms and conditions
            </li>
            <li className='cursor-pointer text-xl font-light transition duration-100 hover:scale-105'>
              Privacy policy
            </li>
            <li className='cursor-pointer text-xl font-light transition duration-100 hover:scale-105'>
              Returns and complaints
            </li>
            <li className='cursor-pointer text-xl font-light transition duration-100 hover:scale-105'>
              Delivery and payment methods
            </li>
            <li className='cursor-pointer text-xl font-light transition duration-100 hover:scale-105'>
              Loyalty program
            </li>
          </ul>
        </div>
      </div>
      <h5 className='text-center'>Developed by Nikodem Bilczewski</h5>
    </footer>
  )
}

export default Footer
