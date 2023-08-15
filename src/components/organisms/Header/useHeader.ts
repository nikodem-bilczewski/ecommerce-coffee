import { useRef, useState } from 'react'

const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(e.target as Node) &&
      isOpen
    ) {
      setIsOpen((isOpen) => !isOpen)
    }
  }

  return {
    isOpen,
    headerRef,
    toggleMenu,
    handleClickOutside,
  }
}

export default useHeader