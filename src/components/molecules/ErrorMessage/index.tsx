import Button from 'components/molecules/Button'

const ErrorMessage = () => (
  <div className='flex flex-col justify-center items-center w-full mx-auto'>
    <h2 className='my-4 text-center text-2xl font-light'>An error occured.</h2>
    <div className='justify-self-center'>
      <Button secondary onClick={() => window.location.reload()}>
        Try again
      </Button>
    </div>
  </div>
)

export default ErrorMessage
