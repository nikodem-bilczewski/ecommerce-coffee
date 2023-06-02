import { useState } from 'react'

type FilterType = {
  id: string
  value: string
}

const useFilters = () => {
  const [filters] = useState<FilterType[]>([
    { id: 'All', value: 'all' },
    { id: 'Coffee', value: 'coffee' },
    { id: 'Coffee Machines', value: 'machine' },
    { id: 'Accessories', value: 'accessories' },
  ])

  return filters
}

export default useFilters
