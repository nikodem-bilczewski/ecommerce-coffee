import { useEffect, useRef, useState } from 'react'

const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node
    if (
      headerRef.current &&
      target instanceof Node &&
      !headerRef.current.contains(target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return {
    isOpen,
    headerRef,
    toggleMenu,
  }
}

export default useHeader
