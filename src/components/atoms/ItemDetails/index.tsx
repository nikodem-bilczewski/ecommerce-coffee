import { ItemDetailsProps } from './ItemDetails.types'

const ItemDetails = ({ label, value, currency }: ItemDetailsProps) => (
  <div>
    <p className='sm:hidden'>{label}</p>
    <span className='text-xl'>
      {value} {currency}
    </span>
  </div>
)

export default ItemDetails
