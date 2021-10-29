import { useRouter } from 'next/router';

const Banner = () => {

  const router = useRouter()

  return (
    <div className='relative'>
      <div className='relative min-h-[300px] h-[30vh] md:h-[55vh] w-full'>
        <img className='w-full h-full object-cover' src='https://cdn.aboutstatic.com/file/4c2f916a679fee297f9c3362688b93ea.jpg?width=2000&height=2000&quality=90' alt='Banner Photo' />
      </div >
      <div className='absolute top-0 left-0 right-0'>
        <span className='flex text-center justify-center font-semibold' >This web application is just a project showcase. It's not intented for commercial use!</span>
      </div>
      <div className='absolute top-[65%] sm:top-[65%] left-[5%]'>
        <h2 className='text-black font-medium text-md mb-3 sm:text-xl'>For any occasion</h2>
        <button
          onClick={() => router.push({
            pathname: '/products',
          })}
          className='h-8 w-40 bg-opacity-70 bg-black text-white hover:bg-black transition delay-75 ease-out'>Browse all products</button>
      </div>
    </div>


  )
}

export default Banner
