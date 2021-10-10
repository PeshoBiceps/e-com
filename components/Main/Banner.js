import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative group'>
      <div className='relative min-h-[300px] h-[30vh] md:h-[55vh] w-full'>
        <Image
          src='/images/a.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div >
      <div className='absolute top-[30%] sm:top-[40%] left-[5%]'>
        <h2 className='text-white font-medium'>For any occasion</h2>
        <h1 className='text-white text-2xl md:text-4xl font-medium py-2 md:py-6'>Shirt guide</h1>
        <button className='h-8 w-24 bg-opacity-70 bg-white  group-hover:bg-opacity-10 group-hover:bg-gray-200 group-hover:text-white transition delay-105 ease-out'>Story</button>
      </div>
    </div>


  )
}

export default Banner
