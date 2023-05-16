import classNames from 'classnames'

import { ButtonProps } from './Button.types'

const Button = ({
  children,
  primary,
  secondary,
  cartButton,
  formButton,
  loadingButton,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const classes = classNames(
    {
      'bg-white bg-opacity-60 px-4 py-2 text-xl text-gray-900 hover:bg-opacity-75 md:text-2xl md:px-5 md:py-3':
        primary,
    },
    {
      'bg-black px-5 py-2 text-2xl text-gray-900 bg-opacity-20 hover:bg-opacity-30 lg:text-3xl lg:font-light':
        secondary,
    },
    {
      'w-full text-gray-900 bg-blue-400 bg-opacity-50 py-4 text-2xl hover:bg-opacity-40':
        formButton,
    },
    {
      'w-full bg-lime-700 py-3 text-2xl text-white hover:bg-opacity-80':
        cartButton,
    },
    {
      'w-full flex items-center justify-center bg-blue-400 bg-opacity-30 py-4 text-2xl text-gray-900 disabled cursor-not-allowed':
        loadingButton,
    },
  )
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md transition-all ${classes}`}
    >
      {children}
    </button>
  )
}

export default Button
