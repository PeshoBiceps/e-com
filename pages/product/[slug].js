import { useRouter } from "next/dist/client/router"
import Layout from "../../components/Layout"
import data from "../../utils/data"
import Link from 'next/link'
import Image from 'next/image'
import { RiLuggageCartLine } from 'react-icons/ri'
import { FiTruck } from 'react-icons/fi'
import { HiOutlineSwitchHorizontal, HiArrowLeft } from 'react-icons/hi'
import ProductAccordion from "../../components/ProductAccordion"
import ProductStar from "../../components/ProductStar"

const ProductScreen = () => {
  const router = useRouter()
  const { slug } = router.query
  console.log(data)
  const product = data.products.find(a => a.slug === slug)
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <Layout title={product.name}>
      <div className='p-5'>
        <Link href='/'>
          <div className='flex items-center'>
            <HiArrowLeft />
            <span className='ml-1'>Back to products</span>
          </div>
        </Link>
      </div>

      <main className='max-w-[1000px] m-auto md:mt-6'>

        <div className='flex flex-wrap px-4 justify-evenly'>
          <div className='relative h-[380px] min-w-[310px] w-[95%] md:h-[580px] md:w-[60%]'>
            <Image
              src={product.image}
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className='p-6 min-w-[290px] w-[95%] md:w-[40%]'>
            <h1 className='font-semibold py-3'>{product.name}</h1>

            <div className='flex flex-col'>
              <div className='flex justify-between py-2 items-end'>
                <p className='font-bold'>{product.price} EUR</p>
                <p className='text-xs'>{product.countInStock > 0 ? 'In stock' : 'Unvailable'}</p>
              </div>
              <button className='bg-black text-white font-semibold p-2 shadow-sm'>ADD TO CART</button>
            </div>

            <div className='my-6'>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
              <p>Rating: {product.rating}</p>
              <p>Description: {product.description}</p>
            </div>

            <div className='mb-4'>
              <ProductStar rating={Math.round(product.rating)} />
            </div>


            <div className='text-sm font-medium text-gray-400'>
              <div className='flex items-center py-1'>
                <RiLuggageCartLine className='text-2xl' />
                <span className='pl-3'>1 DAY DELIVERY</span>
              </div>
              <div className='flex items-center '>
                <FiTruck className='text-xl' />
                <span className='pl-4'>FREE DELIVERY</span>
              </div>
              <div className='flex items-center py-1'>
                <HiOutlineSwitchHorizontal className='text-2xl' />
                <span className='pl-3'>30 DAY RETURN POLICY</span>
              </div>
            </div>

            <ProductAccordion />

          </div>
        </div>
      </main>


    </Layout>

  )
}

export default ProductScreen
