import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'

import { InputProps } from './FormInput.types'

const Input = ({
  label,
  name,
  placeholder,
  type,
  whiteLabel,
  darkLabel,
  text,
  checkbox,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const labelClasses = classNames(
    {
      'block text-xl md:text-2xl font-extralight md:tracking-wide leading-6 text-white':
        whiteLabel,
    },
    {
      'block text-xl md:text-2xl font-normal md:tracking-wide leading-6 text-gray-900':
        darkLabel,
    },
  )

  const inputClasses = classNames(
    {
      'block w-full mt-1 rounded-md border-0 text-xl font-light px-2 sm:text-2xl py-2 text-gray-900 outline-none focus:ring-2 focus:ring-opacity-80 focus:ring-blue-400  placeholder:text-gray-400 sm:leading-6':
        text,
    },
    {
      'rounded-md border-0 text-xl font-light sm:text-2xl text-gray-900 outline-none focus:ring-2 focus:ring-opacity-80 focus:ring-blue-400':
        checkbox,
    },
  )

  return (
    <div>
      <div
        className={checkbox ? 'flex flex-row-reverse justify-end gap-3' : ''}
      >
        {label && (
          <label htmlFor={name} className={labelClasses}>
            {label}
          </label>
        )}
        <input
          id={name}
          type={type}
          {...register(name)}
          className={inputClasses}
          placeholder={placeholder}
        />
      </div>
      {errors[name] && (
        <span className='text-red-500 text-lg pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  )
}

export default Input
