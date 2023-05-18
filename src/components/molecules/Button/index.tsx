import classNames from 'classnames'

import { ButtonProps } from './Button.types'

const Button = ({
  children,
  primary,
  secondary,
  tertiary,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) => {
  const classes = classNames(
    {
      'bg-white bg-opacity-60 px-4 py-2 text-xl text-gray-900 hover:bg-opacity-75 md:text-2xl md:px-5 md:py-3':
        primary,
    },
    {
      'bg-black w-full px-5 py-2 text-2xl text-gray-900 bg-opacity-20 hover:bg-opacity-30 lg:text-3xl lg:font-light':
        secondary,
    },
    {
      'w-full bg-lime-700 py-3 text-2xl text-white hover:bg-opacity-80':
        tertiary,
    },
  )
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`rounded-md transition-all ${classes}`}
    >
      {children}
    </button>
  )
}

export default Button
