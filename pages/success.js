import Layout from '../components/Layout'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useRouter } from 'next/dist/client/router'

const Success = () => {

  const router = useRouter()

  return (
    <Layout>

      <main className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col p-10 bg-gray-200 mt-4 sm:mt-10 shadow-mdsssss'>
          <div className='flex items-center space-x-2 mb-5'>
            <AiFillCheckCircle className='text-gray-600 text-3xl' />
            <h1 className='text-3xl'>Thank you, your order has been confirmed!</h1>
          </div>
          <p>
            Thank you for shopping with us,
            if you would like to check the status of order(s)
            please press the link below.
          </p>
          <button onClick={() => router.push('/profile/orders')} className='mt-7 bg-black text-white shadow-md p-2'>Go to my orders</button>
        </div>
      </main>
    </Layout>
  )
}

export default Success
