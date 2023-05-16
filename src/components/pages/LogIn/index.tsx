import AuthForm from 'components/molecules/AuthForm'
import FormWrapper from 'components/organisms/FormWrapper'

const Login = () => (
  <FormWrapper isLogInForm>
    <AuthForm isLogInForm />
  </FormWrapper>
)

export default Login
