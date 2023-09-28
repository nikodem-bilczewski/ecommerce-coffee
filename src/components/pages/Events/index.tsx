import Event from 'components/organisms/Event/index'

import useEvents from './useEvents'

const Events = () => {
  const coffeeEvents = useEvents()
  return (
    <section className='flex flex-col gap-20 mx-auto my-16 w-full md:w-4/5'>
      <div className='px-10 pb-10  text-center'>
        <h1 className='mb-5 text-5xl font-bold text-center lg:text-6xl'>
          Events
        </h1>
        <h2 className='mb:font-thin text-3xl font-extralight xl:text-4xl '>
          Are you a coffee lover always on the hunt for new and exciting blends?
          Join our coffee newsletter to stay up-to-date on the latest coffee
          trends, news, and exclusive promotions. As a subscriber, you'll
          receive regular updates on our top-rated coffee beans, brewing
          techniques, and expert advice on how to make the perfect cup of
          coffee.
        </h2>
      </div>
      <div className='mx-auto grid grid-cols-1 place-content-center gap-14 lg:grid-cols-2'>
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
    </section>
  )
}

export default Events
