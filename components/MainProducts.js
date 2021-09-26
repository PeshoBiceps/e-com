import Image from 'next/image'
import Link from 'next/link'
import { IoBagAddOutline } from 'react-icons/io5'

const MainProducts = ({ products }) => {

  console.log(products)


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {products.map((item) => (
        <div key={item.name} className='flex flex-col m-2 rounded-sm shadow-sm h-[300px] md:h-[420px]'>
          <Link href={`/product/${item.slug}`} passHref>
            <div className='relative h-full w-full sm:cursor-pointer'>
              <Image
                src={item.image}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </Link>
          <h1 className='text-xs p-1'>{item.name}</h1>
          <div className='flex justify-between p-1'>
            <p className='text-sm font-semibold'>${item.price}</p>
            <button className=''><IoBagAddOutline className='h-5 w-5' /></button>
          </div>
        </div>
      ))
      }
    </div >
  )
}

export default MainProducts
