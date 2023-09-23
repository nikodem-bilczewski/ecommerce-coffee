import { SubmitHandler, UseFormReturn } from 'react-hook-form'

export type JoinNewsletterProps = {
  methods: UseFormReturn<{
    name: string
    email: string
    terms: boolean
  }>
  onSubmit: SubmitHandler<{
    name: string
    email: string
    terms: boolean
  }>
  isLoading: boolean
  isError: boolean
}
