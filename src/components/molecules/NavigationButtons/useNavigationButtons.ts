import { useState } from 'react'

import { NavButtonType } from 'components/molecules/NavigationButtons/navButton.types'

const useNavigationButtons = (): NavButtonType[] => {
  const [navButtons] = useState<NavButtonType[]>([
    { navigateTo: '', btnText: 'Home' },
    { navigateTo: 'products', btnText: 'Products' },
    { navigateTo: 'events', btnText: 'Events' },
    { navigateTo: 'newsletter', btnText: 'Newsletter' },
  ])
  return navButtons
}

export default useNavigationButtons
