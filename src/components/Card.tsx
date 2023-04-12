import { Link } from 'react-router-dom'
import { CardProps } from '../types/CardTypes'

const Card = ({ src, heading, btnText, path }: CardProps) => {
  return (
    <div className='group relative mx-auto max-w-4xl overflow-hidden rounded-lg shadow-xl'>
      <img
        className='transition-transform duration-500 group-hover:scale-110'
        src={src}
        alt='drip coffee'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black to-transparent text-white'>
        <h2 className='mb-4 text-5xl font-thin drop-shadow-xl md:text-7xl'>{heading}</h2>
        <Link
          to={path}
          className='rounded-md bg-white bg-opacity-60 px-4 py-2 text-xl text-gray-900 hover:bg-opacity-75 md:text-2xl'
        >
          <button>{btnText}</button>
        </Link>
      </div>
    </div>
  )
}

export default Card
