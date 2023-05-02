import useFooterInfo from './useFooterInfo'

const FooterInfo = () => {
  const footerInfo = useFooterInfo()

  return (
    <div>
      <h2 className='text-2xl lg:text-3xl'>Informations</h2>
      <ul>
        {footerInfo &&
          footerInfo.map((info) => (
            <li
              key={info}
              className='cursor-pointer text-xl font-light transition duration-100 hover:scale-105'
            >
              {info}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FooterInfo
