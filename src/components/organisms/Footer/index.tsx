import FooterInfo from 'components/molecules/FooterInfo'
import ShopContact from 'components/molecules/ShopContact'

const Footer = () => (
  <footer className='w-full bg-stone-400'>
    <div className='mx-auto mb-10 grid w-full place-items-center px-5 pt-10 text-center md:mb-16 md:grid-cols-2'>
      <ShopContact />
      <FooterInfo />
    </div>
    <h5 className='text-center'>Developed by Nikodem Bilczewski</h5>
  </footer>
)

export default Footer
