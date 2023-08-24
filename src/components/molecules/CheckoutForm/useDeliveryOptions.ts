import { useState } from 'react'

import dhlLogo from 'assets/images/dhl.png'
import dpdLogo from 'assets/images/dpd.png'
import inpostLogo from 'assets/images/inpost.png'

const useDeliveryOptions = () => {
  const [deliveryOptions] = useState([
    { label: 'DPD', value: 'DPD', img: dpdLogo },
    { label: 'InPost', value: 'InPost', img: inpostLogo },
    { label: 'DHL', value: 'DHL', img: dhlLogo },
  ])
  return deliveryOptions
}

export default useDeliveryOptions
