import { useState } from 'react'

import blikLogo from 'assets/images/blik.png'
import cardLogo from 'assets/images/card.png'
import paypalLogo from 'assets/images/paypal.jpeg'

const usePaymentOptions = () => {
  const [paymentOptions] = useState([
    { label: 'PayPal', value: 'paypal', img: paypalLogo },
    { label: 'BLIK', value: 'blik', img: blikLogo },
    { label: 'Credit Card', value: 'credit_card', img: cardLogo },
  ])
  return paymentOptions
}

export default usePaymentOptions
