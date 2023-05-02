import Button from 'components/molecules/Button'
import Card from 'components/molecules/Card/index'

import { CoffeeEventProps } from './CoffeeEvent.types'

const Event = ({ heading, description, image, date }: CoffeeEventProps) => (
  <section className=' mx-auto flex h-full w-4/5 max-w-4xl flex-col gap-3'>
    <Card src={image} heading={heading} />
    <h3 className='text-2xl font-medium mt-2'>{date}</h3>
    <p className='text-xl sm:text-2xl sm:font-light'>{description}</p>
    <Button secondary>Join</Button>
  </section>
)

export default Event
