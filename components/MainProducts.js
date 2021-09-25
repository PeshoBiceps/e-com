import data from '../utils/data'
import Image from 'next/image'
import Link from 'next/link'

const MainProducts = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {data.products.map((item) => (
        <Link key={item.name} href={`/product/${item.slug}`} passHref>
          <div className='flex flex-col m-2 bg-gray-100 rounded-sm shadow-md h-[320px]'>
            <div className='relative h-72 w-full'>
              <Image
                src={item.image}
                layout='fill'
                objectFit='cover'
                className='rounded-sm'
              />
            </div>
            <h1 className='font-semibold py-2 px-5'>{item.name}</h1>
            <div className='flex justify-between px-4'>
              <p className='font-bold'>${item.price}</p>
              <button className='text-red-500 font-semibold'>Add To Cart</button>
            </div>
          </div>
        </Link>


      ))
      }
    </div >
  )
}

export default MainProducts
