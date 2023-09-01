import { ReactNode } from 'react'

export type CardProps = {
  src: string
  heading?: string
  btnText?: string
  path?: string
  children?: ReactNode
}
