import { FormInput } from 'components/molecules/NewsletterForm/newsletterForm.types'
import { emailAPI } from 'config/axios'

export const sendEmail = async (userData: FormInput) => {
  const response = await emailAPI.post('', userData)
  return response.data
}
