import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  cartButton?: boolean
  primary?: boolean
  secondary?: boolean
  formButton?: boolean
  type?: 'button' | 'submit'
}
