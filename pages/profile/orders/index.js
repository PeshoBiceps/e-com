import Layout from "../../../components/Layout"
import moment from "moment"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signOut } from "next-auth/client"
//Icons
import { FaRegUser } from 'react-icons/fa'
import { IoShirtOutline } from 'react-icons/io5'
import { BiExit } from 'react-icons/bi'
//DB
import { dbConnect } from "../../../utils/dbConnect"
import Order from '../../../models/orderModel'

const Orders = ({ orders }) => {
  console.log(orders)
  const router = useRouter()

  return (
    <Layout title='My orders'>
      <div className='max-w-[900px] mx-auto mt-10 p-8 sm:p-0'>
        <div className='flex flex-wrap justify-between'>
          <div className='mt-3 space-y-2'>
            <p onClick={() => router.push('/profile')} className='flex items-center border-b-2  rounded-sm text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 sm:cursor-pointer'><FaRegUser />My Profile</p>
            <p className='flex items-center border-b-2 rounded-sm border-gray-500 text-gray-900 hover:text-black hover:border-black transition ease-in-out delay-75 sm:cursor-pointer'><IoShirtOutline />My Orders</p>
            <p onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })} className='flex items-center border-b-2 rounded-sm text-gray-500 hover:text-black hover:border-black transition ease-in-out delay-75 sm:cursor-pointer'><BiExit />Log out</p>
          </div>

          <div className='w-[770px] space-y-3 my-2'>
            <h2 className='text-xl font-semibold'>My orders</h2>
            {orders.data.length === 0 ? (<div>No orders yet</div>) : (
              orders.data.map((data) => (
                <div key={data._id} className='bg-gray-200 p-3'>

                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-semibold pb-1'>Order number: {data._id}</p>
                      <p className='text-xs'>{moment(data.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                    <div>
                      <button className='bg-gray-800 text-white px-4 py-2'>
                        <Link className='h-full' href={`/profile/orders/${data._id}`} passHref>
                          Details
                        </Link>
                      </button>
                    </div>
                  </div>

                  <div className='flex pt-10 justify-between'>
                    <p>Payment method: {data.paymentType}</p>
                    <p>Total amount: <span className='font-semibold'>{data.totalAmount} EUR</span></p>
                  </div>
                </div>
              ))
            )}

          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Orders

export async function getStaticProps() {

  await dbConnect()
  const data = await Order.find({})

  return {
    props: {
      orders: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}
