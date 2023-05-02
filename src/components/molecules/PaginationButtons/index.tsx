import ReactPaginate from 'react-paginate'

import { PaginationButtonProps } from './PaginationButtons.types'

const PaginationButtons = ({ pageCount, onChange }: PaginationButtonProps) => (
  <ReactPaginate
    pageCount={pageCount}
    pageRangeDisplayed={3}
    onPageChange={({ selected }) => onChange(selected)}
    previousLabel={
      <span className='mr-4 flex items-center justify-center rounded-md bg-black bg-opacity-10 px-4 py-2 text-xl font-light hover:bg-opacity-20 md:text-2xl'>
        previous
      </span>
    }
    nextLabel={
      <span className='font-xl ml-4 flex items-center justify-center rounded-md bg-black bg-opacity-10 px-4 py-2 text-xl font-light hover:bg-opacity-20 md:text-2xl'>
        next
      </span>
    }
    breakLabel={<span className='mx-2 text-2xl'>...</span>}
    containerClassName='flex items-center justify-start w-full'
    pageClassName='mx-2 flex items-center justify-center rounded-md bg-black bg-opacity-10 px-4 py-2 text-xl hover:bg-opacity-20 md:text-2xl'
    activeClassName='bg-black bg-opacity-25'
  />
)

export default PaginationButtons
