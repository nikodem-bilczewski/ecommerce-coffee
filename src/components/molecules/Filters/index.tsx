import { FiltersProps } from './Filters.types'
import useFilters from './useFilters'

const Filters = ({ selectedCategory, handleCategoryChange }: FiltersProps) => {
  const filters = useFilters()

  return (
    <div className='flex justify-start gap-5 md:gap-7'>
      {filters.map(({ id, value }) => (
        <div className='flex items-center gap-1' key={id}>
          <input
            className='sr-only peer'
            type='radio'
            name='products'
            value={value}
            id={id}
            checked={selectedCategory === value}
            onChange={handleCategoryChange}
          />
          <label
            className='text-md sm:text-xl md:text-2xl md:font-normal text-gray-900 bg-black bg-opacity-10 rounded-md px-2 py-1 sm:px-4 sm:py-2 cursor-pointer peer-checked:bg-opacity-25'
            htmlFor={id}
          >
            {id}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Filters
