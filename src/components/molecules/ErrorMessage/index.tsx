import Button from 'components/molecules/Button'

const ErrorMessage = ({ isLogInForm }: { isLogInForm?: boolean }) => (
  <div className='flex flex-col justify-center items-center w-full mx-auto'>
    <h2 className='my-4 text-center text-2xl font-light'>
      An error occured.{' '}
      {isLogInForm ? 'Could not log in.' : 'Could not create an account.'}
    </h2>
    <div className='justify-self-center'>
      <Button secondary onClick={() => window.location.reload()}>
        Try again
      </Button>
    </div>
  </div>
)

export default ErrorMessage
