import { useEffect, useState, useRef } from 'react'
import { Transition } from "@headlessui/react";
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  const ref = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])

  return (
    <nav ref={ref} className="bg-gray-100 text-gray-900 shadow-md">
      <div>

        <div className='h-16 px-10 flex items-center justify-between'>

          <div>
            <div>
              <Link href='/'>
                <span className='md:cursor-pointer'>PeGo Shop</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="ml-10 flex space-x-4">
              <Link href="/contacts">
                Contacts
              </Link>
              <Link href="/profile">
                Profile
              </Link>
              <Link href="/cart">
                Cart
              </Link>
            </div>
          </div>

          <div className="-mr-8 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only ">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-175 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-175 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

        <div className="md:hidden px-2 bg-gray-200 font-medium" id="mobile-menu">
          <div className="flex flex-col items-start justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/contacts">
              <span className='border-b border-gray-300'>Contacts</span>
            </Link>

            <Link href="/profile">
              <span className='border-b border-gray-300'>Profile</span>
            </Link>

            <Link href="/cart">
              <span className='border-b border-gray-300'>Cart</span>
            </Link>
          </div>
        </div>


      </Transition>
    </nav>
  )
}

export default Navbar