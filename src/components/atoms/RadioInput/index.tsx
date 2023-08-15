import { Controller, useFormContext } from 'react-hook-form'

type RadioOption = {
  label: string
  value: string
  img: string
}

type RadioInputProps = {
  label: string
  name: string
  options: RadioOption[]
}

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
              <div key={option.value} className='mt-2'>
                <div className='flex items-center mb-1'>
                  <input
                    type='radio'
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    className='mr-2'
                  />
                  <label
                    htmlFor={`${name}_${option.value}`}
                    className='text-xl md:text-2xl'
                  >
                    {option.label}
                  </label>
                </div>
                <img src={option.img} className='h-24 w-44' />
              </div>
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
