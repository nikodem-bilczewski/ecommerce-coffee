import { Controller, useFormContext } from 'react-hook-form'

import Option from 'components/atoms/Option'

import { RadioInputProps } from './RadioInput.types'

const RadioInput = ({ label, name, options }: RadioInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='mb-5'>
      <label
        htmlFor={name}
        className='block text-xl md:text-2xl md:font-light font-normal md:tracking-wide leading-6 text-gray-900'
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{ required: 'Please select an option' }}
        render={({ field }) => (
          <div className='flex justify-around gap-10'>
            {options.map((option) => (
              <Option
                key={option.value}
                option={option}
                checked={field.value === option.value}
                onChange={() => field.onChange(option.value)}
                name={name}
              />
            ))}
          </div>
        )}
      />
      {errors[name] && (
        <span className='text-red-500 text-lg pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  )
}

export default RadioInput
