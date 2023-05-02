import { ReactNode } from 'react'

const IconWrapper = ({ children }: { children: ReactNode }) => (
  <div className='rounded-full bg-black bg-opacity-10 p-3 hover:bg-opacity-20'>
    {children}
  </div>
)
export default IconWrapper
