import { PaginationButtonProps } from '../../types/PropTypes'

const PaginationButton = ({ onClickHandler, children }: PaginationButtonProps) => {
  return (
    <button
      onClick={onClickHandler}
      className=' m-2 rounded bg-black bg-opacity-20 px-5 py-2 text-2xl hover:bg-opacity-30'
    >
      {children}
    </button>
  )
}

export default PaginationButton
