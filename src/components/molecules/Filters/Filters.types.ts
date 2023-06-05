import { ChangeEvent } from 'react'

export type FiltersProps = {
  selectedCategory: string
  handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void
}
