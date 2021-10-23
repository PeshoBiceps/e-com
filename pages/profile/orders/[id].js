import Layout from "../../../components/Layout"
import moment from "moment"
import Link from 'next/link'
import { useRouter } from 'next/router'
//Icons
import { HiArrowLeft } from 'react-icons/hi'
//DB
import { dbConnect } from "../../../utils/dbConnect"
import Order from '../../../models/orderModel'

const OrderId = ({ order }) => {

  const router = useRouter()

  const { _id, createdAt, email, items, paymentType, totalAmount } = order.data

  return (
    <Layout title='Order'>
      <div className='p-5'>

        <div onClick={() => router.back()}>
          <div className='flex items-center sm:cursor-pointer'>
            <HiArrowLeft />
            <span className='ml-1'>Back</span>
          </div >
        </div>

        <div className='bg-gray-200 max-w-[1000px] mx-auto p-3'>

          <div>
            <p className='font-semibold pb-1'>Order number {_id}</p>
            <p className='text-xs'>Created at: {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p>{email}</p>
          </div>

          <div className='pt-4'>
            <p className='font-semibold'>Products:</p>
            {items.map((data, i) => (
              <div key={i} className='flex'>
                <Link className='h-full' href={`/products/${data.productId}`}>
                  <p className='text-blue-600 cursor-pointer'>{data.productName}</p>
                </Link>
                <div className='pl-2'>
                  <p>{data.qty} x {data.price} EUR</p>
                </div>
              </div>

            ))}
          </div>

          <div className='flex pt-10 justify-between'>
            <p>Payment method: {paymentType}</p>
            <p>Total amount: <span className='font-semibold'>{totalAmount} EUR</span></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrderId

export async function getServerSideProps({ params: { id } }) {

  await dbConnect()
  const data = await Order.findById(id)

  return {
    props: {
      order: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}
