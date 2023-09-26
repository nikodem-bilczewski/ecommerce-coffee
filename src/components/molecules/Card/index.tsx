import { Link } from 'react-router-dom'

import Button from 'components/molecules/Button'

import { CardProps } from './Card.types'

const Card = ({ src, heading, btnText, path, children }: CardProps) => (
  <div className='group relative mx-auto max-w-4xl overflow-hidden rounded-lg shadow-xl'>
    <img
      className='transition-transform duration-500 group-hover:scale-110'
      src={src}
      alt={heading}
    />
    <div className='absolute inset-0 flex flex-col text-center justify-center bg-gradient-to-t from-black to-transparent text-white'>
      <h2 className='mb-4 text-5xl font-thin drop-shadow-xl sm:text-7xl'>
        {heading}
      </h2>
      {children}
      {path && btnText && (
        <Link to={path}>
          <Button primary>{btnText}</Button>
        </Link>
      )}
    </div>
  </div>
)

export default Card
