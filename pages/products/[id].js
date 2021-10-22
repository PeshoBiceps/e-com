//Components
import Layout from "../../components/Layout"
import ProductAccordion from "../../components/ProductAccordion"
import ProductStar from "../../components/ProductStar"
//Next
import { useRouter } from 'next/router'
//Redux
import { useDispatch } from "react-redux";
import { addItem } from '../../features/cart/cartSlice'
//DB
import { dbConnect } from '../../utils/dbConnect'
import Product from '../../models/productModel'
//Icons
import { RiLuggageCartLine } from 'react-icons/ri'
import { FiTruck } from 'react-icons/fi'
import { HiOutlineSwitchHorizontal, HiArrowLeft } from 'react-icons/hi'

export default function ProductScreen({ data }) {

  const router = useRouter()

  const { name, category, image, price, brand, rating, numReviews, countInStock, description } = data.data
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(data.data));
  };

  return (
    data.success ? (
      <Layout title={name}>
        <div className='p-5'>

          <div onClick={() => router.back()}>
            <div className='flex items-center sm:cursor-pointer'>
              <HiArrowLeft />
              <span className='ml-1'>Back to products</span>
            </div >
          </div>

        </div >

        <main className='max-w-[1000px] m-auto md:mt-6'>

          <div className='flex flex-wrap px-4 justify-evenly'>
            <div className='max-w-[450px] max-h-[550px]'>
              <img src={image} className='w-[100%] h-[100%] object-cover' alt='' />
            </div>

            <div className='p-6 min-w-[290px] w-[95%] md:w-[40%]'>
              <h1 className='font-semibold py-3'>{name}</h1>

              <div className='flex flex-col'>
                <div className='flex justify-between py-2 items-end'>
                  <p className='font-bold'>{price} EUR</p>
                  <p className='text-xs'>{countInStock > 0 ? 'In stock' : 'Unvailable'}</p>
                </div>
                <button onClick={handleAddItem} className='bg-black text-white font-semibold p-2 shadow-sm'>ADD TO CART</button>
              </div>

              <div className='my-6'>
                <p>Category: {category}</p>
                <p>Brand: {brand}</p>
                <p>Rating: {rating}</p>
                <p>Description: {description}</p>
              </div>

              <div className='mb-4'>
                <ProductStar rating={Math.round(rating)} />
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

      </Layout >
    ) : (false)
  )
}

export async function getServerSideProps({ params: { id } }) {

  await dbConnect()
  const data = await Product.findById(id)

  return {
    props: {
      data: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}
