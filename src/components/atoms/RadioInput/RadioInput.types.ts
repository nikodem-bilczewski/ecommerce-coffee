type RadioOption = {
  label: string
  value: string
  img: string
}

export type RadioInputProps = {
  label: string
  name: string
  options: RadioOption[]
}
