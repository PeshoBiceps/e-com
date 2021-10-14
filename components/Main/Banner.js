import Image from 'next/image'
import { useRouter } from 'next/router';

const Banner = () => {

  const router = useRouter()

  return (
    <div className='relative'>
      <div className='relative min-h-[300px] h-[30vh] md:h-[55vh] w-full'>
        <Image
          src='/images/a.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div >
      <div className='absolute top-[30%] sm:top-[40%] left-[5%]'>
        <h2 className='text-white font-medium'>For any occasion</h2>
        <h1 className='text-white text-2xl md:text-4xl font-medium py-2 md:py-6'>Browse all products</h1>
        <button
          onClick={() => router.push({
            pathname: '/products',
          })}
          className='h-8 w-24 bg-opacity-70 bg-white  group-hover:bg-opacity-10 group-hover:bg-gray-200 group-hover:text-white transition delay-105 ease-out'>View</button>
      </div>
    </div>


  )
}

export default Banner
