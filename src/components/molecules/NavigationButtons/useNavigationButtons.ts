const useNavigationButtons = () => {
  const navButtons = [
    { navigateTo: '', btnText: 'Home' },
    { navigateTo: 'products', btnText: 'Products' },
    { navigateTo: 'events', btnText: 'Events' },
    { navigateTo: 'newsletter', btnText: 'Newsletter' },
  ]
  return navButtons
}

export default useNavigationButtons
