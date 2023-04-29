import Button from 'components/atoms/Button'
import Card from 'components/molecules/Card/index'
import { CoffeeEvent } from 'components/organisms/Event/CoffeeEvent.type'

const Event = ({ heading, description, image, date }: CoffeeEvent) => (
  <section className=' mx-auto flex h-full w-4/5 max-w-4xl flex-col gap-2'>
    <Card src={image} heading={heading} />
    <h3 className='text-2xl font-medium'>{date}</h3>
    <p className='text-xl sm:text-2xl sm:font-light'>{description}</p>
    <Button secondary>Join</Button>
  </section>
)

export default Event
