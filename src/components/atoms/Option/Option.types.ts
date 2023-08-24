type Option = {
  value: string
  label: string
  img: string
}

export type OptionProps = {
  option: Option
  checked: boolean
  onChange: (e: string) => void
  name: string
}
