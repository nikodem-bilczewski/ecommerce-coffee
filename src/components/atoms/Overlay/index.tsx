import useCartContext from 'contexts/CartContext/useCartContext'

const Overlay = () => {
  const { toggleCart } = useCartContext()
  return (
    <div
      onClick={toggleCart}
      className='fixed bg-black bg-opacity-40  z-30 top-0 left-0 w-full h-screen transition-all'
    ></div>
  )
}

export default Overlay
