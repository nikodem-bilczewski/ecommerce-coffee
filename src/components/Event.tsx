import Card from './Card'
import { CoffeeEvent } from '../types/EventComponentTypes'

const Event = ({ heading, description, image, date }: CoffeeEvent) => {
  return (
    <section className='mx-auto flex w-4/5 max-w-3xl flex-col gap-2'>
      <Card src={image} heading={heading} />
      <h3 className='text-2xl font-medium'>{date}</h3>
      <p className='text-xl sm:text-2xl sm:font-light'>{description}</p>
      <button className='w-20 self-center rounded-md bg-black bg-opacity-10 px-4 py-2 text-xl text-gray-900 hover:bg-opacity-30 md:text-2xl'>
        Join
      </button>
    </section>
  )
}

export default Event
