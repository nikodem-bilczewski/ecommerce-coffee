import { Link } from 'react-router-dom'

import coffeeImg from 'assets/images/pouring.jpg'
import Button from 'components/molecules/Button'
import Card from 'components/molecules/Card'
import NewsletterForm from 'components/molecules/NewsletterForm'

const Newsletter = () => (
  <section className='mt-16 mx-auto w-full lg:w-4/5 flex flex-col items-center text-center gap-20 sm:my-16 xl:flex-row xl:justify-center lg:gap-12'>
    <div className='px-10 flex-1'>
      <h1 className='mb-5 text-5xl font-bold lg:text-6xl'>Newsletter</h1>
      <h2 className='mb:font-thin text-3xl font-extralight xl:text-4xl '>
        Are you a coffee lover always on the hunt for new and exciting blends?
        Join our coffee newsletter to stay up-to-date on the latest coffee
        trends, news, and exclusive promotions. As a subscriber, you'll receive
        regular updates on our top-rated coffee beans, brewing techniques, and
        expert advice on how to make the perfect cup of coffee.
      </h2>
    </div>
    <Card src={coffeeImg}>
      <NewsletterForm />
    </Card>
    <div className='mb-5 xl:hidden'>
      <Link to='/'>
        <Button secondary>Back</Button>
      </Link>
    </div>
  </section>
)

export default Newsletter
