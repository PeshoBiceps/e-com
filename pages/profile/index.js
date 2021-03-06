import Layout from '../../components/Layout'
import { FaRegUser } from 'react-icons/fa'
import { IoShirtOutline } from 'react-icons/io5'
import { BiExit } from 'react-icons/bi'
import { getSession, signOut } from "next-auth/client"
import { useRouter } from 'next/router'

const Profile = ({ user }) => {

  const router = useRouter()

  return (
    <Layout title='My Profile'>
      <div className='max-w-[900px] mx-auto mt-10'>
        <div className='flex flex-col md:flex-row p-2 md:justify-between'>
          <div className='flex flex-row justify-around mb-5 md:mb-0 md:flex-col md:justify-start'>
            <p onClick={() => router.push('/profile')} className='flex items-center border-b-2 rounded-sm text-gray-900 border-gray-900 hover:text-black hover:border-black transition ease-in-out delay-75 cursor-pointer'><FaRegUser />My Profile</p>
            <p onClick={() => router.push('/profile/orders')} className='flex items-center border-b-2 rounded-sm text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 cursor-pointer'><IoShirtOutline />My Orders</p>
            <p onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className='flex items-center border-b-2 rounded-sm text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 cursor-pointer'><BiExit />Log out</p>
          </div>
          <div className='md:max-w-[360px] w-[90%] mx-auto'>
            <h2 className='text-xl font-semibold'>
              Personal info
            </h2>
            <div className='bg-gray-100 px-7 py-2'>
              <p className='font-semibold'>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className='md:max-w-[340px] w-[90%] mx-auto space-y-3'>
            <div className='space-y-3'>
              <h2 className='text-xl font-semibold'>Delivery method</h2>
              <div className='bg-gray-100 px-7 py-2'>
                <p>standart</p>
              </div>
            </div>
            <div className='space-y-3'>
              <h2 className='text-xl font-semibold'>Payment method</h2>
              <div className='bg-gray-100 px-7 py-2'>
                <p>standart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Profile

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }
  const { user } = session;
  return {
    props: { user },
  }
}