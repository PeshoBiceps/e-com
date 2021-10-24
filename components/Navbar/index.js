import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
import { useSelector } from "react-redux";


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <nav className="sticky z-50 top-0 left-0 right-0 bg-gray-100 text-gray-900 shadow-md ">
      <div className='h-16 flex items-center justify-between mx-5 font-medium'>
        <div>
          <Link href='/'>
            <span className='cursor-pointer'>PeGo</span>
          </Link>

        </div>

        <div className='flex space-x-3'>
          <Link href='/profile'>
            <div className='flex items-center cursor-pointer'>
              <FaRegUser className='h-6 w-6' /><span className='hidden sm:inline-flex'>Profile</span>
            </div>
          </Link>
          <Link href='/cart'>
            <div className='flex items-center cursor-pointer'>
              <BiShoppingBag className='h-7 w-7' /><span className='hidden sm:inline-flex'>Cart</span>
              {quantity === 0 ? false :
                <span className='flex items-center justify-center w-4 h-4 sm:ml-1 mt-1 text-xs bg-gray-300 rounded-xl'>{quantity}</span>
              }
            </div>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar