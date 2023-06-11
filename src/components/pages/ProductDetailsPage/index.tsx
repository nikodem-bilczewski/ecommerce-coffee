import ProductDetails from 'components/organisms/ProductDetails'

import useProductDetails from './useProductDetails'

const ProductDetailsPage = () => {
  const { data, isLoading, isError, quantity, handleQuantityChange } =
    useProductDetails()

  return (
    <ProductDetails
      data={data}
      isLoading={isLoading}
      isError={isError}
      quantity={quantity}
      handleQuantityChange={handleQuantityChange}
    />
  )
}
export default ProductDetailsPage
