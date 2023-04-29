import { useState } from 'react'
import cuppingImg from 'assets/images/cupping.jpg'
import baristaImg from 'assets/images/barista.jpg'
import { CoffeeEvent } from 'components/organisms/Event/CoffeeEvent.type'

const useEvents = () => {
  const [coffeeEvents] = useState<CoffeeEvent[]>([
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
  return coffeeEvents
}

export default useEvents
