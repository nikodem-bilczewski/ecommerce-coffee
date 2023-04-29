import { useState } from 'react'

const useFooterInfo = () => {
  const [footerInfo] = useState<string[]>([
    'Terms and conditions',
    'Privacy policy',
    'Delivery and payment methods',
    'Loyalty program',
  ])
  return footerInfo
}

export default useFooterInfo
