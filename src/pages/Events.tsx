import { useState } from 'react'
import Event from '../components/Event'
import cuppingImg from '../assets/images/cupping.jpg'
import baristaImg from '../assets/images/barista.jpg'
import { CoffeeEvent } from '../types/EventComponentTypes'

const Events = () => {
  const [coffeeEvents, setCoffeeEvents] = useState<CoffeeEvent[]>([
    {
      heading: 'Cupping',
      description:
        'Our cupping event is designed for coffee enthusiasts who want to learn about coffee tasting and flavor profiles. Come taste a variety of single-origin coffees, learn how to identify the unique characteristics of each bean, and discover the secrets of the perfect roast.',
      image: cuppingImg,
      date: '2023-05-30',
    },
    {
      heading: 'Barista course',
      description:
        'Sign up for our barista course! Our expert instructors will teach you everything you need to know about espresso extraction, milk texturing, latte art, and more. Whether you are a coffee lover looking to improve your home brewing skills or an aspiring barista hoping to kickstart your career, our course is perfect for you.',
      image: baristaImg,
      date: '2023-06-27',
    },
  ])
  return (
    <div className='m-16 mx-auto grid grid-cols-1 place-content-center gap-14 lg:grid-cols-2'>
      {coffeeEvents &&
        coffeeEvents.map((event) => (
          <Event
            key={event.heading}
            heading={event.heading}
            description={event.description}
            image={event.image}
            date={event.date}
          />
        ))}
    </div>
  )
}

export default Events
