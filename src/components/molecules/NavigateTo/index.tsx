import { Link } from 'react-router-dom'

import { NavigateToProps } from './NavigateTo.types'

const NavigateTo = ({ path, linkText, text }: NavigateToProps) => (
  <p className='mt-10 text-center text-xl md:text-2xl font-light text-gray-500'>
    <span className='mx-1'>{text}</span>
    <Link
      to={path}
      className='font-normal hover:underline text-gray-900 leading-6 '
    >
      {linkText}
    </Link>
  </p>
)

export default NavigateTo
