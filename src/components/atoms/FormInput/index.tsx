import { useFormContext } from 'react-hook-form'

import { FormInputProps } from './FormInput.types'

const FormInput = ({ label, name, type }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <label
        htmlFor={name}
        className='block text-xl md:text-2xl font-normal md:tracking-wide leading-6 text-gray-900'
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className='block w-full mt-2 rounded-md border-0 text-xl font-light px-2 sm:text-2xl py-2 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-opacity-80 focus:ring-blue-400  placeholder:text-gray-400 sm:leading-6'
      />
      {errors[name] && (
        <span className='text-red-500 text-lg pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  )
}

export default FormInput
