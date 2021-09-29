import Layout from "./Layout"
import Link from 'next/link'

const Fail = () => {
  return (
    <Layout title='Product Not Found'>
      <div className='flex flex-col items-center justify-center h-[80vh]'>
        <h1 className='text-4xl'>Product Not Found</h1>
        <Link href='/'>
          <button className='bg-black text-white px-7 py-2 mt-4 shadow-md'>Go Back Shopping</button>
        </Link>

      </div>
    </Layout>

  )
}

export default Fail
