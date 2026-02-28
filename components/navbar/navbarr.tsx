"use client"
import { usePathname } from 'next/navigation'
import { useState, useCallback, useId } from 'react'
import { Menu, X } from 'lucide-react'
import { NavItems } from './NavBarServer'

export default function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false) // ✅ start closed
  const menuId = useId()

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(v => !v), [])

  return (
    <>
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="md:hidden fixed bottom-6 right-8 p-4 rounded-full shadow-xl
                   border backdrop-blur-sm
                   hover:scale-110 active:scale-95 transition-all duration-200 z-40"
      >
        <Menu
          size={22}
          className={`absolute transition-all duration-200 
            ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
        />
        <X
          size={22}
          className={`transition-all duration-200 
            ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
        />
      </button>

    {/* Mobile Nav */}
        {isOpen && (
          <div
            aria-hidden="true"
            onClick={close}
            className="fixed inset-0 md:hidden z-40"
          />
        )}
      <nav
        id={menuId}
        aria-label="Mobile navigation"
        onClick={close}
        className={`z-50 md:hidden fixed bottom-20 right-6 w-64 rounded-xl p-4 shadow-2xl backdrop-blur-md
                    transition-all duration-200 origin-bottom-right
                    ${isOpen
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-95 pointer-events-none'
                    }`}
      >
        <NavItems pathname={pathname} />
      </nav>

      {/* Desktop Nav */}
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex flex-col mt-8 w-[16vw] text-xs"
      >
        <NavItems pathname={pathname} />
      </nav>
    </>
  )
}