import { ReactNode } from 'react'

const IconWrapper = ({
  children,
  clickHandler,
}: {
  children: ReactNode
  clickHandler?: () => void
}) => (
  <div
    onClick={clickHandler}
    className='rounded-full cursor-pointer bg-black bg-opacity-10 p-3 hover:bg-opacity-20'
  >
    {children}
  </div>
)
export default IconWrapper
