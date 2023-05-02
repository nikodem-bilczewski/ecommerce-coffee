import Event from 'components/organisms/Event/index'

import useEvents from './useEvents'

const Events = () => {
  const coffeeEvents = useEvents()
  return (
    <div className='m-16 mx-auto grid grid-cols-1 place-content-center gap-14 lg:grid-cols-2'>
      {coffeeEvents &&
        coffeeEvents.map(({ heading, description, image, date }) => (
          <Event
            key={heading}
            heading={heading}
            description={description}
            image={image}
            date={date}
          />
        ))}
    </div>
  )
}

export default Events
