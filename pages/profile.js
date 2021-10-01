import Layout from "../components/Layout"
import Image from 'next/image'
import { useSelector } from "react-redux"
import { FaRegUser } from 'react-icons/fa'
import { IoShirtOutline } from 'react-icons/io5'
import { BiExit } from 'react-icons/bi'

const Profile = () => {

  const user = useSelector(state => state.user)

  console.log(user)

  return (
    <Layout title='My Profile'>
      <div className='max-w-[900px] mx-auto mt-10 p-8 sm:p-0'>
        <div className='flex flex-wrap justify-between'>
          <div className='mt-3 space-y-2'>
            <p className='flex items-center border-b-2 text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 sm:cursor-pointer'><FaRegUser />My Profile</p>
            <p className='flex items-center border-b-2 text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 sm:cursor-pointer'><IoShirtOutline />My Orders</p>
            <p className='flex items-center border-b-2 text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 sm:cursor-pointer'><BiExit />Log out</p>
          </div>
          <div className='w-[360px]'>
            <h2 className='text-xl font-semibold'>
              Personal info
            </h2>
            <div className='bg-gray-100 px-7 py-2'>
              <p className='font-semibold'>{user.userName}</p>
              <p>{user.userEmail}</p>
            </div>
          </div>
          <div className='w-[340px] space-y-3'>
            <div className='space-y-3'>
              <h2 className='text-xl font-semibold'>Delivery method</h2>
              <div className='bg-gray-100 px-7 py-2'>
                <p>undefined</p>
              </div>
            </div>
            <div className='space-y-3'>
              <h2 className='text-xl font-semibold'>Payment method</h2>
              <div className='bg-gray-100 px-7 py-2'>
                <p>undefined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
