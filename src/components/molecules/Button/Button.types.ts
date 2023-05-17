import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
}
