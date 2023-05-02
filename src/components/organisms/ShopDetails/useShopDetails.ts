import ArrowTrendingDown from '@heroicons/react/24/outline/ArrowTrendingDownIcon'
import CurrencyEuro from '@heroicons/react/24/outline/CurrencyEuroIcon'
import FaceSmileIcon from '@heroicons/react/24/outline/FaceSmileIcon'
import GlobeAltIcon from '@heroicons/react/24/outline/GlobeAltIcon'

const useShopDetails = () => {
  const details = [
    { Icon: GlobeAltIcon, description: 'Worldwide shipping' },
    { Icon: FaceSmileIcon, description: 'Best customer service' },
    { Icon: CurrencyEuro, description: 'Multiple payment methods' },
    { Icon: ArrowTrendingDown, description: 'Lowest prices on market' },
  ]
  return details
}

export default useShopDetails
