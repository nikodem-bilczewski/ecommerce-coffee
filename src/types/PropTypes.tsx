import { MouseEventHandler, ReactNode } from 'react'

export type PaginationButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export type CardProps = {
  src: string
  heading: string
  btnText?: string
  path?: string
}

export type ProductPropType = {
  name: string
  image: string
  price: number
  currency: string
}
