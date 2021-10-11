import Image from 'next/image'

const Browse = () => {
  return (
    <div className='flex'>
      <div>
        <div className='relative min-h-[300px] h-[30vh] md:h-[55vh] w-full'>
          <Image
            src='https://cdn.aboutstatic.com/file/9dd1729dc0f8e8ef4b69a40e8c3c3003.jpg?width=2000&height=2000&quality=90'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Browse
