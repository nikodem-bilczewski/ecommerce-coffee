import AuthForm from 'components/molecules/AuthForm'
import FormWrapper from 'components/organisms/FormWrapper'

const LogIn = () => (
  <FormWrapper isLogInForm>
    <AuthForm isLogInForm />
  </FormWrapper>
)

export default LogIn
