import { OptionProps } from './Option.types'

const Option = ({ option, checked, onChange, name }: OptionProps) => (
  <div className='mt-2'>
    <div className='flex items-center mb-1'>
      <input
        type='radio'
        value={option.value}
        checked={checked}
        onChange={() => onChange(option.value)}
        className='mr-2'
        id={`${name}_${option.value}`}
        name={name}
      />
      <label
        htmlFor={`${name}_${option.value}`}
        className='text-xl md:text-2xl'
      >
        {option.label}
      </label>
    </div>
    <img src={option.img} className='h-24 w-44' alt={option.label} />
  </div>
)

export default Option
