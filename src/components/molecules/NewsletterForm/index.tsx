import NewsletterInfo from 'components/atoms/NewsletterInfo'

import JoinNewsletter from '../JoinNewsletter'
import useNewsletterForm from './useNewsletterForm'

const NewsletterForm = () => {
  const { methods, onSubmit, isLoading, isError, isSuccess } =
    useNewsletterForm()

  return (
    <div>
      {isSuccess && <NewsletterInfo />}
      {!isSuccess && (
        <JoinNewsletter
          methods={methods}
          onSubmit={onSubmit}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </div>
  )
}
export default NewsletterForm
